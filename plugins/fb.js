const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const NEED_WORD = "1"
const FBDESC = "2"
const NOT_FOUNDFB = "3"
const DL_VID = "4"
const UP_VID = "5"
const NO_RESULT = "6"


      Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: false, desc: FBDESC}, (async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid,NEED_WORD,MessageType.text, {quoted: message.data});

        await axios
          .get(`https://lolhuman.herokuapp.com/api/facebook?apikey=queenamdipublic&url=${userName}`)
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
