const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'new', fromMe: false, desc: Lang.UP}, (async (message, match) => {

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: "```WHAT'S NEW ?```

 ```⚜️ VERSION 3.0.0```
*2021/08/13*

- ```UPDATED IMAGE MAKER``` ( *.imaker* )
- ```UPDATED ANIME LIST``` ( *.animelist* )
- ```ADDED NEW COMMAND ESTHETIC``` ( *.esthetic* )

```GOT A SUGGESTION FOR THE BOT?``` ( *wa.me/+94703228470* )

"}) 

 }));
}
