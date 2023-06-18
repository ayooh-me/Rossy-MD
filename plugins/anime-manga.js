import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await fetch(`https://api.zahwazein.xyz/animeweb/myanimelist/manga?query=${text}&apikey=${global.zenzkey}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, type, name, url, synopsis, score, image } = json.result
let mangaingfo = `• *Title:* ${title}
• *Synopsis:* ${synopsis}
• *Link*: ${url}`
  conn.sendFile(m.chat, image, '', mangaingfo, m)
}
handler.help = ['mangainfo']
handler.tags = ['anime']
handler.command = /^(manga|mangainfo)$/i
handler.limit = true

export default handler
