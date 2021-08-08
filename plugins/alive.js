const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive ?(.*)', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        var webimage = await axios.get(Config.ALIVEIMG, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALIVEMSG})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive ?(.*)', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        var webimage = await axios.get(Config.ALIVEIMG, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALIVEMSG})

    }));
}

