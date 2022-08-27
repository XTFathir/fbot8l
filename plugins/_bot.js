let handler = async (m, { conn }) => {
/*	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: m, orderTitle: m, sellerJid: '0@s.whatsapp.net' } } }*/
let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
	
  conn.fakeReply(m.chat, `Hai Kak ${conn.getName(m.sender)}, Apa kabar? 🤗`, '0@s.whatsapp.net', 'Status BOT aktif')
 }

handler.help = ['owner']
handler.tags = ['info']
handler.customPrefix = /^(oy)$/i

export default handler
