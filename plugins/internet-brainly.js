import fetch from 'node-fetch'
let handler = async (m, { text, command, args, usedPrefix }) => {
  if (!args[0]) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} membaca`
    let res = await fetch(`https://api.xteam.xyz/brainly?soal=${text}&APIKEY=05e697e727a818d6`)
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    m.reply(json.jawaban)
}
handler.help = ['Brainly <teks>']
handler.tags = ['internet']
handler.command = /^(brainly)$/i

export default handler
