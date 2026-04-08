const fs = require('fs')
const path = require('path')
const { sessions } = require('../auth/session-store')
const { reactToMessage, sendOwnerMentionAudio } = require('../utils/message-helper')
const { isRateLimited } = require('../utils/rate-limit')
const logger = require('../utils/logger')

const commands = new Map()
const categories = new Map()

function loadPlugins() {
  const categoriesDir = __dirname
  const dirs = fs.readdirSync(categoriesDir).filter(f => 
    fs.statSync(path.join(categoriesDir, f)).isDirectory() && f !== '_loader'
  )
  for (const cat of dirs) {
    const catPath = path.join(categoriesDir, cat)
    const files = fs.readdirSync(catPath).filter(f => f.endsWith('.js'))
    for (const file of files) {
      const plugin = require(path.join(catPath, file))
      if (plugin.name) {
        commands.set(plugin.name, { ...plugin, category: cat })
        if (plugin.alias) {
          for (const a of plugin.alias) commands.set(a, { ...plugin, category: cat, isAlias: true })
        }
        if (!categories.has(cat)) categories.set(cat, [])
        categories.get(cat).push(plugin.name)
        logger.info(`[PLUGIN] Loaded: ${cat}/${plugin.name}`)
      }
    }
  }
}

async function handleIncomingMessage(msg, sock, sessionNumber) {
  const body =
    msg.message?.conversation ||
    msg.message?.extendedTextMessage?.text ||
    msg.message?.imageMessage?.caption ||
    ''
  if (!body.startsWith('.')) return

  const from = msg.key.remoteJid
  const sender = (msg.key.participant || msg.key.remoteJid || '').replace('@s.whatsapp.net', '')
  const parts = body.trim().split(/\s+/)
  let cmdName = parts[0].toLowerCase().slice(1)
  
  const command = commands.get(cmdName)
  if (!command) return

  if (isRateLimited(sender)) {
    await sock.sendMessage(from, { text: '⏳ *Slow down!* Please wait a few seconds.' }, { quoted: msg })
    return
  }

  if (command.reactEmoji) {
    await reactToMessage(sock, msg, command.reactEmoji)
  }

  try {
    await command.execute(sock, msg, { from, sender, args: parts.slice(1), sessionNumber, allSessions: sessions })
  } catch (err) {
    logger.error(`Error in ${cmdName}:`, err)
    await sock.sendMessage(from, { text: `❌ *Error:* ${err.message}` }, { quoted: msg })
  }

  await sendOwnerMentionAudio(sock, msg, from)
}

function getCategories() { return categories }
function getCommands() { return commands }

module.exports = { loadPlugins, handleIncomingMessage, getCategories, getCommands }