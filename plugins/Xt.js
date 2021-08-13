const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const IMAKER = "\n*~* ```IMAGE 🌈 MAKER``` *~*\n\n\n┎🍇 ```.barcode```\n┃\n┝🍇 ```.qr```\n┃\n┝🍇 ```.naruto```\n┃\n┝🍇 ```.bneon```\n┃\n┝🍇 ```.matrix```\n┃\n┝🍇 ```.breakwall```\n┃\n┝🍇 ```.gneon```\n┃\n┝🍇 ```.dropwater```\n┃\n┝🍇 ```.crossfire```\n┃\n┝🍇 ```.silk```\n┃\n┝🍇 ```.flame```\n┃\n┝🍇 ```.glow```\n┃\n┝🍇 ```.smoke```\n┃\n┝🍇 ```.sky```\n┃\n┝🍇 ```.cs```\n┃\n┝🍇 ```.lightwriting```\n┃\n┝🍇 ```.crismes```\n┃\n┝🍇 ```.firework```\n┃\n┝🍇 ```.sandw```\n┃\n┝🍇 ```.freefire```\n┃\n┝🍇 ```.gplay```\n┃\n┝🍇 ```.splay```\n┃\n┝🍇 ```.box3d```\n┃\n┝🍇 ```.3d```\n┃\n┝🍇 ```.blackpink```\n┃\n┝🍇 ```.thunder```\n┃\n┝🍇 ```.leave```\n┃\n┝🍇 ```.tlight```\n┃\n┝🍇 ```.book```\n┃\n┝🍇 ```.gaming```\n┃\n┝🍇 ```.wolf```\n┃\n┝🍇 ```.pubg```\n┃\n┝🍇 ```.snow```\n┃\n┝🍇 ```.wc```\n┃\n┝🍇 ```.avengers```\n┃\n┝🍇 ```.ph```\n┃\n┝🍇 ```.marvel```\n┃\n┗🍇 ```.glitch```\n\n"
const Config = require('../config');
const Ln = "Image Maker"
const need = "```YOU MUST ENTER WORDS!```"

if (Config.WORKTYPE == 'public') {

//XT

Asena.addCommand({pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));
    
    Asena.addCommand({pattern: 'metal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/wolfmetal?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));
    
    Asena.addCommand({pattern: 'uwo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/underwaterocean?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));
    
    Asena.addCommand({pattern: 'nlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/neonlight?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));
    
    Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));
    
    Asena.addCommand({pattern: 'camo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/camuflage?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));
    
    Asena.addCommand({pattern: 'vintage ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/vintage?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));
    
    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/candy?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));
    
    Asena.addCommand({pattern: 'gradient ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));
    
    Asena.addCommand({pattern: 'stars ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/stars?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));
    
       Asena.addCommand({pattern: 'fur ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/fur?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CONFIG_KEY})

    }));

}
