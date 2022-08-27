let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Yaudah kalo gitu, FBOT mau tidur dulu kak🥱😴* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['fbot(on/off)']
handler.tags = ['main']
handler.command = /^(fbotoff)$/i

handler.admin = true

export default handler