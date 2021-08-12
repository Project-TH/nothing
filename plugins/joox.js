const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
/*const got = require('got');
const fs = require('fs');*/
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('weather');
const { errorMessage, infoMessage } = require('../helpers');

Asena.addCommand({pattern: 'fsong ?(.*)', fromMe: false}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_SONG);
	const url = `https://api.${Config.XRUN}.xyz/search/jooxfind?q=${match[1]}&APIKEY=${Config.XT}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🎼 ' + Lang.SONG +':* ```' + match[1] + '```\n\n' +
		'*🎧 ' + Lang.ALBUM +':* ```' + json.result.album + '```\n' + 
		'*🔊 ' + Lang.TITLE +':* ```' + json.result.judul + '```\n' +
		'*🎚️ ' + Lang.PUBLICATION +':* ```' + json.result.dipublikasi + '```\n' + 
		'*🎙️ ' + Lang.SONGL +':* ```' + json.result.mp3 + '```\n' , MessageType.text);
		
		return await message.sendMessage(from,await getBuffer(`json.result.mp3`, {method: 'get'})  , MessageType.audio, {quoted: mek, mimetype: Mimetype.mp4audio, ptt: true});
    
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDS, MessageType.text);
	}
});
