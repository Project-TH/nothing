const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Asena = require('../events');
const DEL = "Delete all messages from you"



 Asena.addCommand({pattern: 'del', fromMe: true, desc: DEL}, (async (message, match) => {

    await message.sendMessage('```DELETING ALL...```');
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```🗑 ALL DELETED!```');
}));
