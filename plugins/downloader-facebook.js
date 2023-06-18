import fetch from  'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `🚩Wheres the url\nExample; ${usedPrefix}${command} https://www.facebook.com/100010929794713/posts/1885825845125057/`
	let res = await fetch(`https://api.zeltoria.my.id/api/download/facebook?url=${text}&apikey=${global.zeltoria}`)
  let x = await res.json()
  let cap = `乂 F A C E B O O K\n◦  *Title*: ${x.title}`
  conn.sendFile(m.chat, x.urls[0].hd, 'efbih.mp4', cap, m)
}
handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^(facebook|fbdl|fb|facebookdl)$/i
handler.limit = true

export default handler
