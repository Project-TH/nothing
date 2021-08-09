const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "```YOU MUST ENTER WORDS!```"

if (Config.WORKTYPE == 'public') {

//One Text Logos By Thevindu Hansara

Asena.addCommand({pattern: 'inaruto ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ibneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'imatrix ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ibreakwall ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'igneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'idropwater ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'icrossfire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'isilk ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'iflame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'iglow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ismoke ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'isky ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ics ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ilightwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'icrismes ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ifirework ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'isandw ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ifreefire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'igplay ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'isplay ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ibox3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'i3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3d?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'iblackpink ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ithunder ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ileave ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'itlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ibook ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/nulis?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//Two Text Logos By Thevindu Hansara

Asena.addCommand({pattern: 'iwolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ipubg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'isnowwrite ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'iwatercolour ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'iavengers ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'iph ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'imarvel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'iglitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

}
