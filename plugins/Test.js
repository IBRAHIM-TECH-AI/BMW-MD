






































































































const {
  Function,
  isPrivate,
  getUrl,
  fromBuffer,
  getBuffer,
  getJson,
  AddMp3Meta,
  createMap,
  formatBytes,
  parseJid,
  isUrl,
  parsedJid,
  styletext,
  decodeJid,
  yt,
  ytIdRegex,
  yta,
  ytv,
  runtime,
  clockString,
  sleep,
  pnix,
} = require("../lib/");
const lib = require("../lib");
const util = require("util");
const config = require("../config");

pnix({ pattern: 'eval', on: "text", fromMe: true, desc: 'Runs a server code' }, async (message, match, m, client) => {
  //
  if (match.startsWith(">")) {
            try {
                let evaled = await eval(`(async () => { ${match.replace(">", "")} })()`);
                if (typeof evaled !== "string") evaled = util.inspect(evaled);
                await message.reply(`${'```'}${evaled}${'```'}`)
            } catch (err) {
                await message.reply(`_${util.format(err)}_`);
            }
  }
  //
});
