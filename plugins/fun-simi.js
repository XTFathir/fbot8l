import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://api.xteam.xyz/simsimi?kata=${text}&APIKEY=05e697e727a818d6`)
  let res = await api.json()
  m.reply(res.jawaban)
}
handler.command = ['simi']
handler.tags = ['fun']
handler.help = ['simi']

export default handler