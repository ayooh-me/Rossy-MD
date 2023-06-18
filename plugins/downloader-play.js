import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import yts from 'yt-search'
var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `🚩 wheres the song name?`
  let search = await yts(text)
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
  if (!search) throw '🚩 Please change the song name'
  let { title, thumbnail, timestamp, views, ago, url } = vid

  let captvid = `乂 𝖸 𝖳 - 𝖯 𝖫 𝖠 𝖸
	◦ *Title:* ${title}

	◦ *Durasion:* ${timestamp}

	◦ *Views:* ${views}

	◦ *Uploaded:* ${ago}

	◦ *Link:* ${url}
	
	◦ *Bitrate:* 128kbps
 
     `
conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid }, m)
const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: false,
mediaType:  2,
mediaUrl: https://github.com/Rossy-Chan/Rossy-MD,
title: ʀᴏssʏ-ᴍᴅ (ᴘʀᴇᴍɪᴜᴍ),
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data
      }
    }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^play?$/i

handler.exp = 0
handler.limit = false
handler.register = false

export default handler
