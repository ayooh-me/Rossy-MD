import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!args[0]) throw `🚩 where's the url?`
  let res = await fetch(`https://api.zeltoria.my.id/api/download/tiktok?url=${args[0]}&apikey=${global.zeltoria}`)
  await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
})
  let x = await res.json()
  let anu = x.result
  let cap = `*Rossy-MD* `
  conn.sendFile(m.chat, anu.video.no_watermark, 'tiktok.mp4', cap, m)
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true

export default handler