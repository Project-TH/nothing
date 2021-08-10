const THEVINDUapi = require('textmaker-thevindu');
const Asena = require('../events');
const { MessageType, GroupSettingChange, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"
let FM = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({ pattern: 'ngold ?(.*)', fromMe: FM, dontAddCMDList: true }, (async (message, match) => {


    if (match[1] === '') return await message.sendMessage(need);
    THEVINDUapi.textpro("https://textpro.me/hexa-golden-text-effect-842.html",
        `${match[1]}`
    ).then(async (data) => {
        try {
            var download = async (uri, filename, callback) => {
                await request.head(uri, async (err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };

            await download(`${data}`, '/root/Project-69/lgd.jpg', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('/root/Project-69/lgd.jpg'), MessageType.image, { caption: Config.CAPTION_KEY })
            })
        } catch (err) {
            console.log(err)
        }
    });
})
);
