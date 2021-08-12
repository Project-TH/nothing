const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Heroku = require('heroku-client');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('AIbot');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

if (Config.AI_BOT == 'true') {
	if (Config.WORKTYPE == 'private') {
		Asena.addCommand({pattern: 'bot ?(.*)', fromMe: true, desc: Lang.BOT_DESC}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*🧞 ' + Lang.BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
	
	else if (Config.WORKTYPE == 'public') {
		Asena.addCommand({pattern: 'bot ?(.*)', fromMe: false, desc: Lang.BOT_DESC}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*🧞 ' + Lang.BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
}

else if (Config.AI_BOT == 'false') {
	if (Config.WORKTYPE == 'private') {
		Asena.addCommand({pattern: 'bot ?(.*)', fromMe: true, desc: Lang.BOT_DESC}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n🧞 ' + Lang.BOT + Lang.NOT_AVAILABLE , MessageType.text);
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
	
	else if (Config.WORKTYPE == 'public') {
		Asena.addCommand({pattern: 'bot ?(.*)', fromMe: false, desc: Lang.BOT_DESC}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n🧞‍♀️ ' + Lang.BOT + Lang.NOT_AVAILABLE , MessageType.text,{quoted: message.data});
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
}
