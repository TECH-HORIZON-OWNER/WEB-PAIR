const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "HORIZON-MD~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `𝙷𝚎𝚕𝚕𝚘🤩, 𝙲𝚘𝚗𝚐𝚛𝚊𝚝𝚜 𝚢𝚘𝚞 𝚑𝚊𝚟𝚎 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚐𝚎𝚝 𝚜𝚎𝚜𝚜𝚒𝚘𝚗 𝚒𝚍 *𝙷𝙾𝚁𝙸𝚉𝙾𝙽 𝙼𝙳 𝙱𝙾𝚃*

👨‍💻 𝙲𝚛𝚎𝚊𝚝𝚘𝚛: *𝚃𝙴𝙲𝙷 𝙷𝙾𝚁𝙸𝚉𝙾𝙽 𝚂𝙲𝙷𝙾𝙾𝙻 𝙸𝙽𝙲* 
🏢 𝙾𝚛𝚐𝚊𝚗𝚒𝚣𝚊𝚝𝚒𝚘𝚗: *𝚃𝙴𝙲𝙷 𝙷𝙾𝚁𝙸𝚉𝙾𝙽 𝚂𝙲𝙷𝙾𝙾𝙻 𝙸𝙽𝙲.* 
*🗓️ 𝙲𝚛𝚎𝚊𝚝𝚎𝚍:* *2025*

 🌟 *𝙵𝚘𝚕𝚕𝚘𝚠 𝚘𝚞𝚛 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝙲𝚑𝚊𝚗𝚗𝚎𝚕 𝚏𝚘𝚛 𝚞𝚙𝚍𝚊𝚝𝚎𝚜 ⬇️* 
 https://whatsapp.com/channel/0029VbANgdT5fM5ShIUQ2m0e 

*🔄 𝙽𝚎𝚠 𝚏𝚎𝚊𝚝𝚞𝚛𝚎𝚜 𝚌𝚘𝚖𝚒𝚗𝚐 𝚜𝚘𝚘𝚗.𝚂𝚝𝚊𝚢 𝚝𝚞𝚗𝚎𝚍!* 

> *𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 𝚃𝙴𝙲𝙷 𝚂𝙷𝙰𝙽*
> *𝙵𝙾𝚄𝙽𝙳𝙴𝚁 𝙾𝙵 𝚃𝙴𝙲𝙷 𝙷𝙾𝚁𝙸𝚉𝙾𝙽 𝚂𝙲𝙷𝙾𝙾𝙻 𝙸𝙽𝙲*`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "TECH HORIZON SCHOOL INC",
thumbnailUrl: "https://i.ibb.co/Wz2j7N9/ROMEK-XD-V2.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VbANgdT5fM5ShIUQ2m0e",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `𝙷𝚎𝚕𝚕𝚘🤩, 𝙲𝚘𝚗𝚐𝚛𝚊𝚝𝚜 𝚢𝚘𝚞 𝚑𝚊𝚟𝚎 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚐𝚎𝚝 𝚜𝚎𝚜𝚜𝚒𝚘𝚗 𝚒𝚍 *𝙷𝙾𝚁𝙸𝚉𝙾𝙽 𝙼𝙳 𝙱𝙾𝚃*

👨‍💻 𝙲𝚛𝚎𝚊𝚝𝚘𝚛: *𝚃𝙴𝙲𝙷 𝙷𝙾𝚁𝙸𝚉𝙾𝙽 𝚂𝙲𝙷𝙾𝙾𝙻 𝙸𝙽𝙲* 
🏢 𝙾𝚛𝚐𝚊𝚗𝚒𝚣𝚊𝚝𝚒𝚘𝚗: *𝚃𝙴𝙲𝙷 𝙷𝙾𝚁𝙸𝚉𝙾𝙽 𝚂𝙲𝙷𝙾𝙾𝙻 𝙸𝙽𝙲.* 
*🗓️ 𝙲𝚛𝚎𝚊𝚝𝚎𝚍:* *2025*

 🌟 *𝙵𝚘𝚕𝚕𝚘𝚠 𝚘𝚞𝚛 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝙲𝚑𝚊𝚗𝚗𝚎𝚕 𝚏𝚘𝚛 𝚞𝚙𝚍𝚊𝚝𝚎𝚜 ⬇️* 
 https://whatsapp.com/channel/0029VbANgdT5fM5ShIUQ2m0e 

*🔄 𝙽𝚎𝚠 𝚏𝚎𝚊𝚝𝚞𝚛𝚎𝚜 𝚌𝚘𝚖𝚒𝚗𝚐 𝚜𝚘𝚘𝚗.𝚂𝚝𝚊𝚢 𝚝𝚞𝚗𝚎𝚍!* 

> *𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 𝚃𝙴𝙲𝙷 𝚂𝙷𝙰𝙽*
> *𝙵𝙾𝚄𝙽𝙳𝙴𝚁 𝙾𝙵 𝚃𝙴𝙲𝙷 𝙷𝙾𝚁𝙸𝚉𝙾𝙽 𝚂𝙲𝙷𝙾𝙾𝙻 𝙸𝙽𝙲*`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "TECH HORIZON SCHOOL INC",
thumbnailUrl: "https://i.ibb.co/Wz2j7N9/ROMEK-XD-V2.jpg"",
sourceUrl: "https://whatsapp.com/channel/0029VbANgdT5fM5ShIUQ2m0e",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await GIFTED_MD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
