/*import moment from 'moment-timezone'
import fetch from 'node-fetch'
let handler = m => m

handler.all = async function (m) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.send3ButtonLoc(m.chat, `
*hai, *
${user.banned ? 'kamu dibanned' : 'Halo Saya Adalah Salah Satu Bot Whatsapp Yang Dikembangkan Oleh wa.me/6285326794834 ( *FBOT* )'}
`.trim(), wm, user.register ? '⋮☰ Menu' : 'Verify', user.register ? '.menu' : `.daftar ${username}.13`, 'Owner', '.owner', m)
    user.pc = new Date * 1
}

export default handler*/