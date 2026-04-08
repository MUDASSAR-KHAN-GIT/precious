<div align="center">

<img src="https://img.shields.io/badge/PRECIOUS--MD-🍂-8B4513?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Precious-MD Banner">

# 🌸 **PRECIOUS-MD** 🍂  
**The Ultimate Multi-Session WhatsApp Bot**

[![Version](https://img.shields.io/badge/Version-3.0.0-8B4513?style=flat-square&logo=git)](https://github.com/Mudassar-khan-M2K/precious-md)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js)](https://nodejs.org)
[![Baileys](https://img.shields.io/badge/Baileys-v6.7%2B-00BFFF?style=flat-square)](https://github.com/whiskeysockets/baileys)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/atlas)
[![License](https://img.shields.io/badge/License-MIT-FFD700?style=flat-square)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Mudassar-khan-M2K/precious-md?style=flat-square&logo=github)](https://github.com/Mudassar-khan-M2K/precious-md/stargazers)

**200+ Powerful Commands • Multi-Session Architecture • AI-Powered • Media Downloader • Group Manager • Games & More**

![Demo](https://via.placeholder.com/800x200/8B4513/FFFFFF?text=PRECIOUS-MD+🍂+—+Next+Level+WhatsApp+Automation)  
*(Replace with actual GIF/screenshot in your repo)*

</div>

---

## ✨ **Why PRECIOUS-MD?**

**PRECIOUS-MD** is a **feature-rich**, **multi-device** WhatsApp bot built with love in **Node.js**. It combines powerful automation, stunning media tools, engaging games, intelligent AI, and robust group management — all wrapped in a clean, modular architecture.

Whether you're a casual user, group admin, or power user, PRECIOUS-MD delivers **smooth performance**, **anti-ban protection**, and a **beautiful web dashboard**.

- **🌟 200+ Commands** across 7 categories
- **🔄 Multi-Session Support** — control multiple numbers from one dashboard
- **🤖 Advanced AI** (Gemini-powered chat, image generation, roast, TTS, etc.)
- **📥 Ultra-Fast Media Downloader** (YouTube, TikTok, Instagram, Facebook, X, Pinterest & more)
- **🛡️ Smart Anti-Ban & Rate Limiting**
- **📊 Live Web Dashboard** with password protection
- **💾 Automatic MongoDB Backups** every 6 hours
- **🎮 Fun Games** & **🔧 Utility Tools**

---

## 🚀 **Quick Features Highlight**

| Feature                  | Status     | Description |
|-------------------------|------------|-----------|
| **Multi-Session**       | ✅ Full   | Run unlimited WhatsApp numbers simultaneously |
| **Web Dashboard**       | ✅ Full   | QR/Pairing login + live stats (password: `precious`) |
| **Media Downloader**    | ✅ Advanced | Supports 10+ platforms with yt-dlp |
| **AI Suite**            | ✅ Powerful | Chat, Imagine, TTS, Summary, Translate, Roast |
| **Group Management**    | ✅ Complete | Promote/Demote, Warn system, Antilink, Welcome/Goodbye |
| **Games**               | ✅ Fun     | Tic-Tac-Toe, Hangman, Quiz, RPS & more |
| **Automation**          | ✅ Smart   | Autoreact, Autoview status, Autorespond, Reminders |
| **Anti-Ban Protection** | ✅ Strong  | Random delays, rate limiting, user-agent rotation |

---

## 🛠️ **Tech Stack**

- **Language**: Node.js (v18+ recommended)
- **WhatsApp Library**: [@whiskeysockets/baileys](https://github.com/whiskeysockets/baileys) v6.7+
- **Database**: MongoDB Atlas (sessions, settings, backups)
- **Deployment**: Heroku • Railway • Render • VPS • Koyeb
- **Downloader**: yt-dlp-exec
- **Web**: Express + HTML/CSS/JS dashboard

---

## 📁 **Project Structure**

```bash
precious-md-bot/
├── server.js                 # Main server & bot initialization
├── database.js               # MongoDB connection
├── .env                      # Environment variables
├── Procfile                  # Heroku deployment
│
├── auth/
│   ├── session-store.js
│   ├── qr.js
│   └── pair.js
│
├── plugins/
│   ├── _loader.js            # Command loader
│   ├── _menu.js              # Dynamic menu
│   ├── utility/              # 9 commands
│   ├── media/                # 8 commands
│   ├── games/                # 9 commands
│   ├── group/                # 12 commands
│   ├── ai/                   # 6 commands
│   ├── automation/           # 4 commands
│   └── owner/                # 6 commands
│
├── utils/                    # Helpers & protections
├── web/                      # Beautiful dashboard
├── audio/dev.mp3             # Owner mention voice note
└── tmp/                      # Temporary files (auto-cleaned)
Full detailed structure available in the Project Structure section below.

👑 Developer & Team
RoleNameContactDeveloper & OwnerMudassar Khan+92 321 6046022Co-Owner 1-+92 307 1639265Co-Owner 2-+92 347 7262704Co-Owner 3-+92 325 7762682
Location: Mianwali, Pakistan
GitHub: Mudassar-khan-M2K

📋 Complete Command List
🔧 Utility Commands
.ping • .alive • .uptime • .status • .owner • .about • .repo • .speedtest • .sysinfo
📥 Media Commands
.dl • .ytmp3 • .play • .img • .sticker • .toimg • .tomp3 • .tourl
🎮 Games
.dice • .coin • .truth • .dare • .8ball • .quiz • .tictactoe • .hangman • .rps
👥 Group Management (Admin only for most)
.tagall • .promote • .demote • .kick • .add • .welcome • .goodbye • .antilink • .antidelete • .warn • .mute • .poll
🤖 AI Commands
.ai • .imagine • .tts • .summary • .translate • .roast
⚙️ Automation
.autoreact • .autoview • .autorespond • .reminder
🔐 Owner Commands
.sessions • .broadcast • .restore • .backup • .logs • .update
Menu: .menu or .menu <category> (utility | media | games | group | ai | automation | owner)

🌟 Special Features

🎵 Owner Mention Audio — Automatic 30-second voice note when any owner is mentioned
❤️ Smart Reactions — Every command reacts with a beautiful emoji
⏳ Rate Limiter — 30 commands/hour per user to prevent abuse
🛡️ Anti-Ban System — Random delays (800-2500ms) + user-agent rotation
📦 Auto-Backup — Session backups every 6 hours with 30-day retention
🌐 Web Dashboard — Live stats, QR/Pairing login, password precious


🚀 Deployment Guide
1. Prerequisites

Node.js 18+
MongoDB Atlas (free tier OK)
Git
Heroku / VPS account

2. Environment Variables (.env)
envMONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/precious_md
PORT=3000
3. Step-by-Step Heroku Deployment
Bash# 1. Clone / Create folder
mkdir precious-md-bot && cd precious-md-bot

# 2. Install dependencies
npm install

# 3. Test locally
npm start
# → Open http://localhost:3000 → Password: precious

# 4. Deploy to Heroku
heroku create precious-md-bot
heroku config:set MONGODB_URI=your_mongodb_uri_here
git init
git add .
git commit -m "Initial commit - PRECIOUS-MD v3.0.0"
git push heroku main
heroku ps:scale web=1
heroku open
First Login:

Open your app URL
Enter password → precious
Add your WhatsApp number
Choose QR or Pairing Code
Connect and enjoy! Send .menu anywhere.


📊 Database Collections

session_<number> — WhatsApp credentials per session
session_backups — Auto backups (30-day retention)
group_settings — Welcome, goodbye, antilink per group
warns — Warning system
autorespond — Keyword replies


⚠️ Important Notes & Best Practices

Anti-Ban: Avoid excessive multi-session reactions/polls. Use built-in delays.
Limitations: Instagram may need cookies. AI features require API keys (Gemini, etc.).
Recommended: Max 15 sessions on basic Heroku dyno.
Troubleshooting:
QR not showing? → Restart & clear cache
Download fails? → Update yt-dlp
Session lost? → Check MongoDB connection



📝 License & Credits
License: MIT — Free to use, modify, and distribute.
Credits:

@whiskeysockets/baileys
yt-dlp community
Open-source contributors
Special thanks to everyone who supports the project!

Developed with ❤️ by Mudassar Khan — Mianwali, Pakistan

🎯 Future Roadmap

 More games (Chess, Sudoku, Wordle)
 Full WhatsApp Channel support
 Voice-to-Text transcription
 Group activity leaderboard
 Multi-language (Urdu, Hindi)
 Custom prefix per user
 Additional AI models


🙌 Support & Community

WhatsApp: +92 321 6046022
GitHub Issues: Report bugs / Request features
Repository: Mudassar-khan-M2K/precious-md

Star ⭐ this repo if you like it! Your support keeps the project alive.


Made with passion in Pakistan 🇵🇰
PRECIOUS-MD v3.0.0 — Elevating WhatsApp Experience

```
