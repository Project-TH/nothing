const Asena = require('../events');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys'); // Boredom 😬

const Language = require('../language');
const Lang = Language.getString('locate'); // Language supp. 😉


    Asena.addCommand({pattern: 'locate', fromMe: true, desc: Lang.L_DESC, warn: Lang.L_WARN}, (async (message, match) => {

        var r_text = new Array ();
        r_text[0] = "𝙳𝙴𝙶𝚁𝙴𝙴𝚂 𝙻𝙰𝚃𝙸𝚃𝚄𝙳𝙴: 24.121231, 𝙳𝙴𝙶𝚁𝙴𝙴𝚂 𝙻𝙾𝙽𝙶𝙸𝚃𝚄𝙳𝙴: 55.1121221"; // Actually, I don't know where is this place..
        r_text[1] = "𝙳𝙴𝙶𝚁𝙴𝙴𝚂 𝙻𝙰𝚃𝙸𝚃𝚄𝙳𝙴: 8.838637, 𝙳𝙴𝙶𝚁𝙴𝙴𝚂 𝙻𝙾𝙽𝙶𝙸𝚃𝚄𝙳𝙴: -13.721434"; // U too homie

        var i = Math.floor(2*Math.random()) // Random func. 🤪

        await message.sendMessage(`𝙼𝚈 𝙻𝙾𝙲𝙰𝚃𝙸𝙾𝙽! ${r_text[i]}`, MessageType.location); // It sends ur location. Cool tho 😱

}));
