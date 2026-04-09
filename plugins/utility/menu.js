module.exports = {
  name: 'menu',
  alias: ['help', 'cmds'],
  category: 'utility',
  desc: 'Show bot menu with image',
  reactEmoji: '🌸',  // Added reaction emoji
  async exec(sock, msg, { from }) {
    
    const menuText = `╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   *🌸 PRECIOUS-MD BOT*   
┃   *🤖 Version:* 3.0.0
╰━━━━━━━━━━━━━━━━━━━━━━╯

*⚡ Prefix:* . (dot)
*📊 Status:* ✅ Active
*🎯 Commands:* 50+

┏━━━━━━━ *📱 BASIC* ━━━━━━━┓
┃ .ping      - Check latency
┃ .alive     - Bot status  
┃ .menu      - Show menu
┃ .about     - Bot info
┃ .owner     - Owner contact
┗━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━ *🎵 MEDIA* ━━━━━━━┓
┃ .sticker   - Image to sticker
┃ .toimg     - Sticker to image
┃ .tourl     - Upload to URL
┃ .dl        - Download video
┃ .ytmp3     - YouTube to MP3
┗━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━ *👥 GROUP* ━━━━━━━┓
┃ .tagall    - Mention all
┃ .welcome   - Toggle welcome
┃ .goodbye   - Toggle goodbye
┃ .antilink  - Toggle anti-link
┃ .kick      - Remove member
┃ .promote   - Make admin
┃ .demote    - Remove admin
┗━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━ *🤖 AI* ━━━━━━━┓
┃ .chat      - ChatGPT AI
┃ .imagine   - Generate image
┃ .tts       - Text to speech
┃ .translate - Translate text
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━ *🎮 GAMES* ━━━━━━━┓
┃ .dice      - Roll dice
┃ .quiz      - Play quiz
┃ .truth     - Truth question
┃ .dare      - Dare challenge
┃ .rps       - Rock paper scissors
┗━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━ *👑 OWNER* ━━━━━━━┓
┃ .broadcast - Broadcast message
┃ .backup    - Backup database
┃ .sessions  - Manage sessions
┃ .restart   - Restart bot
┗━━━━━━━━━━━━━━━━━━━━━━━┛

━━━━━━━━━━━━━━━━━━━━━━━━
📌 *Example:* .ping
💡 *Support:* @owner
📦 *PRECIOUS-MD v3.0*
━━━━━━━━━━━━━━━━━━━━━━━━`

    // Send menu (reaction will be handled by _loader.js automatically)
    await sock.sendMessage(from, { text: menuText })
  }
}
