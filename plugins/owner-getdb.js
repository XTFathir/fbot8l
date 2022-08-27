import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('ᴛᴜɴɢɢᴜ ꜱᴇʙᴇɴᴛᴀʀ, ꜱᴇᴅᴀɴɢ ᴍᴇɴɢᴀᴍʙɪʟ ꜰɪʟᴇ ᴅᴀᴛᴀʙᴀꜱᴇ')
    let databasenya = await fs.readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: databasenya, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['owner']
handler.command = /^(getdb)$/i

handler.owner = true

export default handler