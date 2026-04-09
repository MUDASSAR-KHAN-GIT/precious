const axios = require('axios')

module.exports = {
  name: 'dl',
  alias: [
    'download', 'vid', 'video',
    'yt', 'youtube', 'ytmp4', 'ytvideo',
    'ig', 'instagram', 'insta', 'igdl',
    'tt', 'tiktok', 'tik tok',
    'fb', 'facebook', 'meta',
    'tw', 'twitter', 'x',
    'pin', 'pinterest', 'pt'
  ],
  category: 'media',
  desc: 'Download videos from YouTube, Instagram, TikTok, Facebook, Twitter, Pinterest & more',
  reactEmoji: '📥',
  execute: async (sock, msg, { from, args }) => {
    
    if (!args.length) {
      await sock.sendMessage(from, { 
        text: `❌ *Usage:* .dl [URL]\n\n*Examples:*\n📹 .dl https://youtu.be/xxxxx\n📸 .dl https://instagram.com/p/xxxxx\n🎵 .dl https://tiktok.com/@user/video/xxxxx` 
      })
      return
    }

    const url = args[0]
    
    // Detect platform
    let platformEmoji = '📥'
    let platformName = 'Media'
    
    if (url.includes('youtu.be') || url.includes('youtube.com')) {
      platformEmoji = '🎬'
      platformName = 'YouTube'
    } else if (url.includes('instagram.com')) {
      platformEmoji = '📸'
      platformName = 'Instagram'
    } else if (url.includes('tiktok.com')) {
      platformEmoji = '🎵'
      platformName = 'TikTok'
    } else if (url.includes('facebook.com') || url.includes('fb.watch')) {
      platformEmoji = '📘'
      platformName = 'Facebook'
    } else if (url.includes('twitter.com') || url.includes('x.com')) {
      platformEmoji = '🐦'
      platformName = 'Twitter'
    } else if (url.includes('pinterest.com') || url.includes('pin.it')) {
      platformEmoji = '📌'
      platformName = 'Pinterest'
    }
    
    await sock.sendMessage(from, { 
      text: `${platformEmoji} *Downloading from ${platformName}...*\n⏳ Please wait.` 
    })

    try {
      // Fetch download links from API
      const apiUrl = `https://batgpt.vercel.app/api/alldl?url=${encodeURIComponent(url)}`
      console.log('[DL] Fetching:', apiUrl)
      
      const response = await fetch(apiUrl)
      const data = await response.json()
      
      console.log('[DL] API Response:', JSON.stringify(data, null, 2))

      if (!data.success) {
        throw new Error(data.message || 'Could not fetch media')
      }

      const downloadLinks = data.links || []
      
      if (downloadLinks.length === 0) {
        throw new Error('No download links found')
      }

      // Resolve tiny URLs to actual video URLs
      let videoUrl = null
      for (const link of downloadLinks) {
        try {
          console.log('[DL] Resolving link:', link)
          
          // Follow redirects to get actual video URL
          const resolved = await axios.get(link, {
            maxRedirects: 5,
            timeout: 10000,
            responseType: 'arraybuffer'
          })
          
          // Check if it's a video
          const contentType = resolved.headers['content-type']
          if (contentType && contentType.includes('video')) {
            videoUrl = link
            console.log('[DL] Found video URL:', videoUrl)
            break
          }
          
          // Try to get the final URL after redirects
          if (resolved.request && resolved.request.res && resolved.request.res.responseUrl) {
            videoUrl = resolved.request.res.responseUrl
            console.log('[DL] Resolved URL:', videoUrl)
            break
          }
        } catch (resolveErr) {
          console.log('[DL] Failed to resolve:', resolveErr.message)
          continue
        }
      }

      if (!videoUrl) {
        // If can't resolve, use the first link as is
        videoUrl = downloadLinks[0]
      }

      // Download the video as buffer
      console.log('[DL] Downloading video from:', videoUrl)
      const videoResponse = await axios.get(videoUrl, {
        responseType: 'arraybuffer',
        timeout: 60000,
        maxRedirects: 5
      })
      
      const videoBuffer = Buffer.from(videoResponse.data)
      console.log('[DL] Video size:', videoBuffer.length, 'bytes')

      // Send the video
      await sock.sendMessage(from, {
        video: videoBuffer,
        caption: `${platformEmoji} *${platformName} Download Complete!*\n\n📥 *Size:* ${(videoBuffer.length / 1024 / 1024).toFixed(2)} MB\n📱 *Platform:* ${platformName}\n\n> PRECIOUS-MD BOT`
      })
      
      console.log('[DL] Video sent successfully!')

    } catch (err) {
      console.error('[DL] Error:', err.message)
      
      let errorMsg = `❌ *Download Failed!*\n\n`
      errorMsg += `Platform: ${platformName}\n`
      errorMsg += `Error: ${err.message}\n\n`
      errorMsg += `*Tips:*\n`
      errorMsg += `• Try the URL directly in browser\n`
      errorMsg += `• Some videos may be private\n`
      errorMsg += `• Try a different video\n`
      
      await sock.sendMessage(from, { text: errorMsg })
    }
  }
}
