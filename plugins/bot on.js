let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak tadi ketiduran😊* ')
}


handler.tags = ['main']
handler.command = /^(fboton)$/i

handler.admin = true

export default handler