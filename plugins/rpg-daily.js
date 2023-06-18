const rewards = {
  Exp: 9999,
  Money: 4999,
  Potion: 5,
}
const cooldown = 86400000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `Kamu Sudah Mengambilnya Hari Ini, Tunggu *${((user.lastclaim + cooldown) - new Date()).toTimeString()}* Lagi`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${reward}\n`
  }
  conn.reply(m.chat, text.trim(), m)
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['rpg']
handler.command = /^(daily|claim)$/i

handler.cooldown = cooldown

export default handler