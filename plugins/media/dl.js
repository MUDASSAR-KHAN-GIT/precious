module.exports = {
  name: 'dl',
  alias: ['download', 'video'],
  category: 'media',
  desc: 'Download videos from YouTube, Instagram, TikTok, etc.',
  async exec(sock, msg, { from, args }) {
    if (!args.length) {
      await sock.sendMessage(from, { text: '❌ *Usage:* .dl [URL]\n\n*Example:* .dl https://youtu.be/xxxxx' })
      return
    }

    const url = args[0]
    
    // Send processing message
    await sock.sendMessage(from, { text: '⏳ *Downloading...* Please wait.' })

    try {
      const response = await fetch(`https://batgpt.vercel.app/api/alldl?url=${encodeURIComponent(url)}`)
      const data = await response.json()

      if (!data.success || !data.mediaInfo) {
        throw new Error('Failed to get media info')
      }

      const { title, videoUrl, platform } = data.mediaInfo

      // Send video
      await sock.sendMessage(from, {
        video: { url: videoUrl },
        caption: `📥 *Download Complete!*\n\n📌 *Title:* ${title}\n📱 *Platform:* ${platform}\n\n> PRECIOUS-MD BOT`
      })

    } catch (err) {
      console.error('Download error:', err)
      await sock.sendMessage(from, { text: `❌ *Error:* Failed to download.\n\nMake sure URL is valid and supported.\n\n*Supported platforms:* YouTube, Instagram, TikTok, Facebook, Twitter` })
    }
  }
}
