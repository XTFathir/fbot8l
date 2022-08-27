let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
Ga usah Donasi ga papa :)
`
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler