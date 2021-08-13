const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const IMAKER = "\n*~* ```IMAGE 🌈 MAKER``` *~*\n\n\n┎🍇 ```.barcode```\n┃\n┝🍇 ```.qr```\n┃\n┝🍇 ```.naruto```\n┃\n┝🍇 ```.bneon```\n┃\n┝🍇 ```.matrix```\n┃\n┝🍇 ```.breakwall```\n┃\n┝🍇 ```.blood```\n┃\n┝🍇 ```.metal```\n┃\n┝🍇 ```.uwo```\n┃\n┝🍇 ```.gneon```\n┃\n┝🍇 ```.harrypotter```\n┃\n┝🍇 ```.retrolol```\n┃\n┝🍇 ```.shadow```\n┃\n┝🍇 ```.romantic```\n┃\n┝🍇 ```.butterfly```\n┃\n┝🍇 ```.coffecup```\n┃\n┝🍇 ```.nlight```\n┃\n┝🍇 ```.rainbow```\n┃\n┝🍇 ```.camo```\n┃\n┝🍇 ```.vintage```\n┃\n┝🍇 ```.candy```\n┃\n┝🍇 ```.gradient```\n┃\n┝🍇 ```.stars```\n┃\n┝🍇 ```.fur```\n┃\n┝🍇 ```.dropwater```\n┃\n┝🍇 ```.crossfire```\n┃\n┝🍇 ```.silk```\n┃\n┝🍇 ```.flame```\n┃\n┝🍇 ```.glow```\n┃\n┝🍇 ```.smoke```\n┃\n┝🍇 ```.sky```\n┃\n┝🍇 ```.cs```\n┃\n┝🍇 ```.lightwriting```\n┃\n┝🍇 ```.crismes```\n┃\n┝🍇 ```.firework```\n┃\n┝🍇 ```.sandw```\n┃\n┝🍇 ```.freefire```\n┃\n┝🍇 ```.gplay```\n┃\n┝🍇 ```.splay```\n┃\n┝🍇 ```.box3d```\n┃\n┝🍇 ```.3d```\n┃\n┝🍇 ```.blackpink```\n┃\n┝🍇 ```.thunder```\n┃\n┝🍇 ```.leave```\n┃\n┝🍇 ```.tlight```\n┃\n┝🍇 ```.book```\n┃\n┝🍇 ```.gaming```\n┃\n┝🍇 ```.wolf```\n┃\n┝🍇 ```.pubg```\n┃\n┝🍇 ```.snow```\n┃\n┝🍇 ```.wc```\n┃\n┝🍇 ```.avengers```\n┃\n┝🍇 ```.ph```\n┃\n┝🍇 ```.marvel```\n┃\n┗🍇 ```.glitch```\n\n"
const Config = require('../config');
const Ln = "Image Maker"
const need = "```YOU MUST ENTER WORDS!```"

if (Config.WORKTYPE == 'public') {

//ZRUN

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(message.jid,need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/harrypotter?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({pattern: 'retrolol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(message.jid,need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/retrolol?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(message.jid,need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/shadow?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({pattern: 'romantic ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(message.jid,need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/romantic?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({pattern: 'butterfly ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(message.jid,need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/butterfly?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({pattern: 'coffecup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(message.jid,need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/coffecup?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

}

else if (Config.WORKTYPE == 'private') {

//ZRUN

Asena.addCommand({ pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(message.jid, need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/harrypotter?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

Asena.addCommand({ pattern: 'retrolol ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(message.jid, need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/retrolol?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

Asena.addCommand({ pattern: 'shadow ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(message.jid, need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/shadow?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

Asena.addCommand({ pattern: 'romantic ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(message.jid, need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/romantic?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

Asena.addCommand({ pattern: 'butterfly ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(message.jid, need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/butterfly?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

Asena.addCommand({ pattern: 'coffecup ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(message.jid, need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/coffecup?text=${match[1]}&APIKEY=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

}
