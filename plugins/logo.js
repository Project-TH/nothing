const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const IMAKER = "\n*~* ```IMAGE 🌈 MAKER``` *~*\n\n\n┎🍇 ```.barcode```\n┃\n┝🍇 ```.qr```\n┃\n┝🍇 ```.naruto```\n┃\n┝🍇 ```.bneon```\n┃\n┝🍇 ```.matrix```\n┃\n┝🍇 ```.breakwall```\n┃\n┝🍇 ```.gneon```\n┃\n┝🍇 ```.dropwater```\n┃\n┝🍇 ```.crossfire```\n┃\n┝🍇 ```.silk```\n┃\n┝🍇 ```.flame```\n┃\n┝🍇 ```.glow```\n┃\n┝🍇 ```.smoke```\n┃\n┝🍇 ```.sky```\n┃\n┝🍇 ```.cs```\n┃\n┝🍇 ```.lightwriting```\n┃\n┝🍇 ```.crismes```\n┃\n┝🍇 ```.firework```\n┃\n┝🍇 ```.sandw```\n┃\n┝🍇 ```.freefire```\n┃\n┝🍇 ```.gplay```\n┃\n┝🍇 ```.splay```\n┃\n┝🍇 ```.box3d```\n┃\n┝🍇 ```.3d```\n┃\n┝🍇 ```.blackpink```\n┃\n┝🍇 ```.thunder```\n┃\n┝🍇 ```.leave```\n┃\n┝🍇 ```.tlight```\n┃\n┝🍇 ```.book```\n┃\n┝🍇 ```.gaming```\n┃\n┝🍇 ```.wetglass```\n┃\n┝🍇 ```.multicolour```\n┃\n┝🍇 ```.luxurygold```\n┃\n┝🍇 ```.bflower```\n┃\n┝🍇 ```.metal```\n┃\n┝🍇 ```.royal```\n┃\n┝🍇 ```.anony```\n┃\n┝🍇 ```.avatarlol```\n┃\n┝🍇 ```.fps```\n┃\n┝🍇 ```.wolf```\n┃\n┝🍇 ```.pubg```\n┃\n┝🍇 ```.snowwrite```\n┃\n┝🍇 ```.watercolour```\n┃\n┝🍇 ```.avengers```\n┃\n┝🍇 ```.ph```\n┃\n┝🍇 ```.marvel```\n┃\n┗🍇 ```.glitch```\n\n"
const Config = require('../config');
const Ln = "Image Maker"
const need = "```YOU MUST ENTER WORDS!```"

if (Config.WORKTYPE == 'public') {

//QR & BARCODE

Asena.addCommand({pattern: 'qr ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/qrencode?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'barcode ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/barcode?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//One Text Logos By Thevindu Hansara (TEXTPRO)

Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'bneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'matrix ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'dropwater ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'crossfire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'silk ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'flame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'glow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'smoke ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'sky ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'cs ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'lightwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'crismes ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'firework ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'sandw ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'freefire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gplay ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'splay ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'box3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: '3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3d?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'leave ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'tlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'book ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/nulis?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//QAMDI

Asena.addCommand({pattern: 'wetglass ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'multicolour3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/multicolor3d?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'luxurygold ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/luxurygold?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'bflower ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/beautifulflower?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'metal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'royal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/royaltext?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'anony ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'avatarlol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'fps ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));



//Two Text Logos By Thevindu Hansara (TEXTPRO)

Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'pubg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'snowwrite ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'avengers ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ph ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'imaker ?(.*)', fromMe: false, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,IMAKER, MessageType.text);

    }));

}

else if (Config.WORKTYPE == 'private') {

//QR & BARCODE

Asena.addCommand({pattern: 'qr ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/qrencode?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'barcode ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/barcode?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//One Text Logos By Thevindu Hansara (TEXTPRO)

Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'bneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'matrix ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'dropwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'crossfire ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'silk ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'flame ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'glow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'smoke ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'sky ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'cs ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'lightwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'crismes ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'firework ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'sandw ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'freefire ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gplay ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'splay ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'box3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: '3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3d?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'leave ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'tlight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/nulis?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//QAMDI

Asena.addCommand({pattern: 'wetglass ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'multicolour3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/multicolor3d?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'luxurygold ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/luxurygold?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'bflower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/beautifulflower?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'metal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'royal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/royaltext?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'anony ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'avatarlol ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'fps ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));



//Two Text Logos By Thevindu Hansara (TEXTPRO)

Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'pubg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'snowwrite ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'avengers ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ph ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'imaker ?(.*)', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,IMAKER, MessageType.text);

    }));

}
