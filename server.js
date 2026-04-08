require('dotenv').config()
const express = require('express')
const path = require('path')
const { sessions, qrStore, restoreAllSessions } = require('./auth/session-store')
const { createSessionViaQR } = require('./auth/qr')
const { createSessionViaPairing } = require('./auth/pair')
const { startBackupScheduler } = require('./utils/backup')
const { loadPlugins } = require('./plugins/_loader')
const logger = require('./utils/logger')

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'web')))

loadPlugins()

app.get('/api/stats', (req, res) => {
  const nums = [...sessions.keys()]
  res.json({
    sessions: nums.length,
    numbers: nums.map(n => n.slice(0, 3) + '****' + n.slice(-2)),
    uptime: process.uptime()
  })
})

app.post('/api/qr', async (req, res) => {
  const { number } = req.body
  if (!number) return res.json({ error: 'Number required' })
  const clean = number.replace(/\D/g, '')
  if (clean.length < 10) return res.json({ error: 'Invalid number' })
  if (sessions.has(clean)) return res.json({ error: 'Already connected' })

  qrStore.delete(clean)
  createSessionViaQR(clean)

  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 500))
    if (qrStore.has(clean)) break
  }
  const qr = qrStore.get(clean)
  if (qr) res.json({ qr })
  else res.json({ error: 'QR not ready' })
})

app.post('/api/pair', async (req, res) => {
  const { number } = req.body
  if (!number) return res.json({ error: 'Number required' })
  const clean = number.replace(/\D/g, '')
  if (clean.length < 10) return res.json({ error: 'Invalid number' })
  try {
    const code = await createSessionViaPairing(clean)
    res.json({ code })
  } catch (err) {
    res.json({ error: err.message })
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web', 'index.html'))
})

process.on('uncaughtException', (err) => logger.error('Uncaught Exception:', err))
process.on('unhandledRejection', (err) => logger.error('Unhandled Rejection:', err))

const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
  logger.info('╔═══════════════════════════════════╗')
  logger.info('║   🌸 PRECIOUS-MD 🍂 v3.0 READY   ║')
  logger.info('╚═══════════════════════════════════╝')
  logger.info(`🌐 Dashboard: http://localhost:${PORT}`)
  await restoreAllSessions(createSessionViaQR)
  startBackupScheduler()
})