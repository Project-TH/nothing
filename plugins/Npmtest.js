const lasiapi = require('textmaker-lasi');
const XTroid = require('../events');
const GG = "...."
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"
let FM = Config.WORKTYPE == 'public' ? false : true



XTroid.addCMD({pattern: 'nclub ?(.*)', fromMe: FM, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Project-69/neww.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Project-69/neww.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 

    });});
}));

}
