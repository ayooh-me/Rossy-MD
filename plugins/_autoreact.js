let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['🍔','🍟'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bile?k|Rossy|ban?h|Bot|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|Ayodya|Rossy-Chan|Bot|owner)/i
handler.command = new RegExp
  
handler.mods = false

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
