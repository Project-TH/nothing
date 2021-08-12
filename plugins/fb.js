const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const NEED_WORD = "```PLEASE ENTER A VALID LINK!```"
const FB_DESC = "Downloads Image/Video From Facebook"
const NOT_FOUNDFB = "```I COULD NOT FIND ANYTHING!```"
const DL_VID = "```DOWNLOADING VIDEO...```"
const UP_VID = "```UPLOADING SONG...```"
const NO_RESULT = "```I COULD NOT FIND ANYTHING!```"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: true,  deleteCommand: false, desc: FB_DESC}, (async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid,NEED_WORD,MessageType.text, {quoted: message.data});

        await axios
          .get(`https://bx-hunter.herokuapp.com/api/fbdownload?url=${username}&apikey=Ikyy69`)
          .then(async (response) => {
            const {
              result,
              status,
            } = response.data

            const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

            const msg = `${status}`

      if (msg === '500') { await message.client.sendMessage(message.jid,NOT_FOUNDFB,MessageType.text, {quoted: message.data})}
          
      if (msg === '200') {
        await message.client.sendMessage(message.jid,DL_VID,MessageType.text, {quoted: message.data});
        await message.client.sendMessage(message.jid,UP_VID,MessageType.text, {quoted: message.data});
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {caption: Config.CAPTION_KEY}) 
        }
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
          )
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: false,  deleteCommand: false, desc: FB_DESC}, (async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid,NEED_WORD,MessageType.text, {quoted: message.data});

        await axios
          .get(`https://bx-hunter.herokuapp.com/api/fbdownload?url=${username}&apikey=Ikyy69`)
          .then(async (response) => {
            const {
              result,
              status,
            } = response.data

            const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

            const msg = `${status}`

      if (msg === '500') { await message.client.sendMessage(message.jid,NOT_FOUNDFB,MessageType.text, {quoted: message.data})}
          
      if (msg === '200') {
        await message.client.sendMessage(message.jid,DL_VID,MessageType.text, {quoted: message.data});
        await message.client.sendMessage(message.jid,UP_VID,MessageType.text, {quoted: message.data});
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {caption: Config.CAPTION_KEY}) 
        }
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
          )
    }));
}
