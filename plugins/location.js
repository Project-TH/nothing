const Asena = require('../events');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys'); // Boredom π¬

const Language = require('../language');
const Lang = Language.getString('locate'); // Language supp. π


    Asena.addCommand({pattern: 'locate', fromMe: true, desc: Lang.L_DESC, warn: Lang.L_WARN}, (async (message, match) => {

        var r_text = new Array ();
        r_text[0] = "π³π΄πΆππ΄π΄π π»π°ππΈπππ³π΄: 24.121231, π³π΄πΆππ΄π΄π π»πΎπ½πΆπΈπππ³π΄: 55.1121221"; // Actually, I don't know where is this place..
        r_text[1] = "π³π΄πΆππ΄π΄π π»π°ππΈπππ³π΄: 8.838637, π³π΄πΆππ΄π΄π π»πΎπ½πΆπΈπππ³π΄: -13.721434"; // U too homie

        var i = Math.floor(2*Math.random()) // Random func. π€ͺ

        await message.sendMessage(`πΌπ π»πΎπ²π°ππΈπΎπ½! ${r_text[i]}`, MessageType.location); // It sends ur location. Cool tho π±

}));
