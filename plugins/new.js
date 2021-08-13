const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const NEW = `
*WHAT'S NEW ?*

 *⚜️ VERSION 3.0.0*
*2021/08/13*

- Updated Image Maker
- Updated Anime List
° *.ava*
° *.neko*
- Added New Command
° *.esthetic*

<Thevindu Hansara>
`
const Config = require('../config')
const Ln = "Latest Update"

if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'new ?(.*)', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,NEW, MessageType.text);

    }));

}

else if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'new ?(.*)', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,NEW, MessageType.text);

    }));

}
