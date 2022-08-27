import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned ) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
let res = await fetch(API('xteam', '/simsimi', { kata: encodeURIComponent(m.text) }, 'APIKEY'))
        if (!res.ok) throw eror
        let json = await res.json()
        if (json.success == 'gapaham banh:v') return m.reply('lu ngetik apaaan sih')
        m.reply(json.jawaban)
        return !0
    }
    return true
}
export default handler