import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let husbu = `https://api.zahwazein.xyz/randomanime/husbu?apikey=${global.zahwan}`
	conn.sendMessage(m.chat, { image: { url: husbu }, caption: 'Awpokawpaok Gepeng' }, m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.limit = true
export default handler
