/*import fetch from 'node-fetch'
import { tiktokdl } from '@bochilteam/scraper'
let handler = m => m

export default handler

handler.all = async function (m, { isPrems, args }) {

    if (m.chat.endsWith('broadcast')) return
    if (db.data.users[m.sender].banned) return
    if (db.data.chats[m.chat].isBanned) return

    let url = m.text.split(/\n| /i)[0]
    
    if (/^.*tiktok/i.test(m.text)) {
        const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
*Nickname:* ${nickname}
*Description:* ${description}
`.trim(), m)

}
}
*/