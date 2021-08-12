const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const ANIME = "\n*~* ```ANIME 🍭 LIST``` *~*\n\n\n┎🫐 ```.loli```\n┃\n┝🫐 ```.wifu```\n┃\n┝🫐 ```.neko```\n┃\n┝🫐 ```.awoo```\n┃\n┝🫐 ```.shinobu```\n┃\n┗🫐 ```.megumin```\n\n"
const fs = require('fs');
const Ln = "Anime List"
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'loli ?(.*)', fromMe: true,dontaddCommandList: true }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

    Asena.addCommand({ pattern: 'toon ?(.*)', fromMe: true,dontaddCommandList: true }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/anime/webtoon?url=https%3A%2F%2Fwww.webtoons.com%2Fid%2Faction%2Fweak-hero%2Fep-135-last-one8%2Fviewer%3Ftitle_no%3D1585%26episode_no%3D136&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

    Asena.addCommand({ pattern: 'wifu ?(.*)', fromMe: true,dontaddCommandList: true }, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/waifu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));


    Asena.addCommand({ pattern: 'awoo ?(.*)', fromMe: true,dontaddCommandList: true }, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/awoo?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));   
    
    
    Asena.addCommand({ pattern: 'shinobu ?(.*)', fromMe: true,dontaddCommandList: true }, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/shinobu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

    Asena.addCommand({ pattern: 'megumin ?(.*)', fromMe: true,dontaddCommandList: true }, (async (message, match) => {
        

        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/megumin?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

    Asena.addCommand({ pattern: 'animelist ?(.*)', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,ANIME, MessageType.text);

    }));

    Asena.addCommand({ pattern: 'neko ?(.*)', fromMe: true,dontaddCommandList: true }, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/neko?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'loli ?(.*)', fromMe: false,dontaddCommandList: true }, (async (message, match) => {
        

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

    Asena.addCommand({ pattern: 'toon ?(.*)', fromMe: true,dontaddCommandList: true }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/anime/webtoon?url=https%3A%2F%2Fwww.webtoons.com%2Fid%2Faction%2Fweak-hero%2Fep-135-last-one8%2Fviewer%3Ftitle_no%3D1585%26episode_no%3D136&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

    Asena.addCommand({ pattern: 'wifu ?(.*)', fromMe: false,dontaddCommandList: true }, (async (message, match) => {
        

        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/waifu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

    Asena.addCommand({ pattern: 'awoo ?(.*)', fromMe: false,dontaddCommandList: true }, (async (message, match) => {
       

        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/awoo?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
        }));  



    Asena.addCommand({ pattern: 'shinobu ?(.*)', fromMe: false,dontaddCommandList: true }, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/shinobu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));


    Asena.addCommand({ pattern: 'megumin ?(.*)', fromMe: false,dontaddCommandList: true }, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/megumin?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

    Asena.addCommand({ pattern: 'animelist ?(.*)', fromMe: false, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,ANIME, MessageType.text);

    }));

    Asena.addCommand({ pattern: 'neko ?(.*)', fromMe: false,dontaddCommandList: true }, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/neko?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));




     
}
