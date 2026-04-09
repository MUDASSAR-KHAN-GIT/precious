const fs = require('fs')
const path = require('path')

module.exports = {
  name: 'menu',
  alias: ['help', 'cmds'],
  category: 'utility',
  reactEmoji: '🌸',
  desc: 'Show bot menu with image',
  async execute(sock, msg, { from }) {
    
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
┃ .sessions  - Manage sessions
┃ .restart   - Restart bot
┃ .logs      - View logs
┗━━━━━━━━━━━━━━━━━━━━━━━┛

━━━━━━━━━━━━━━━━━━━━━━━━
📌 *Example:* .ping
💡 *Support:* @owner
📦 *PRECIOUS-MD v3.0*
━━━━━━━━━━━━━━━━━━━━━━━━`

    // Try to send with image
    const imagePath = path.join(__dirname, '../../audio/menu.png')
    
    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath)
      await sock.sendMessage(from, {
        image: imageBuffer,
        caption: menuText
      })
    } else {
      // Send without image if file not found
      await sock.sendMessage(from, { text: menuText })
    }
  }
}
