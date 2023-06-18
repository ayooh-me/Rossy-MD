import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix, text, command }) => {
	if (!text) return m.reply("Textnya?");
	conn.animedif = conn.animedif ? conn.animedif : {};
	if (m.sender in conn.animedif)
		throw "Masih Ada Proses Yang Belum Selesai, Silahkan Tunggu Yah >//<";
	else conn.animedif[m.sender] = true;
	try {
		m.reply("_Sedang Di Proses..._");
		const res = await fetch(
			global.API("rose", "/image/anime/diffusion", { prompt: text }, "apikey")
		);
		if (res.status == false) throw false;
		const Data = await res.arrayBuffer();
		conn.sendMessage(m.chat, { image : { url : Data }, caption : `Teksnya: ${text}` }, m)
	} catch (_error) {
		m.reply("Server Error :(");
	} finally {
		if (conn.animedif[m.sender]) {
			delete conn.animedif[m.sender];
		} /*
        if (Status == true) {
            conn.sendButton(m.chat, `Prompt :\n${text}`, global.wm, Data, [['Re-Create',`${usedPrefix + command} ${text}`]],m)
        } else {
            m.reply("Proses Gagal")
        }*/
	}
};
handler.help = ["animedif","chara"];
handler.tags = ["ai"];
handler.command = ["animedif","chara"];

handler.premium = true

export default handler;
