const XTroid = require('../events');
const Config = require('../config');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('_xtroid');
const axios = require('axios');
const Menu1 = `
γ *πLink pannelπ* γ


β *YouTube*
     y2u.be/mDnJ7q3S3eY

β *Blog* 
     tinyurl.com/Bloglink12

β *Book Web*
     cutt.ly/9Qot6w2

β *Telegaram*
    ββ¦β¦β¦ Main Group     β
       t.me/danuma01

    ββ¦β¦β¦ A/L Channel    β
       t.me/alxams
  
    ββ¦β¦β¦ O/L Channel    β
       t.me/olxams

    ββ¦β¦β¦ Bot Channel    β
       t.me/danumabots

    ββ¦β¦β¦ Mod Apps        β
       t.me/danuma

    ββ¦β¦β¦ Film Channel   β
       t.me/films_SL_x

    ββ¦β¦β¦ Play Games     β
       t.me/SLPlaygames

    ββ¦β¦β¦ NXT binners    β
       t.me/nxtbinners

    ββ¦β¦β¦ Cartoon World β
       t.me/SL_Toons
`

const Menu2 = `
γ *πX-Troid Menuπ* γ


β€ *N.G 01*π
chat.whatsapp.com/EotXTpTHhcG4atdTbyZg3T

β€ *N.G 02*π
chat.whatsapp.com/LUbUB7edSU3H0uRgLuvAll

β€ *N.G 03*π
chat.whatsapp.com/DQ5DropDeSX1nTkZCjZ9SE

β€ *N.G 04*π
chat.whatsapp.com/LsifeICKyrTKQFizJF6GWi

β€ *N.G 05*π
chat.whatsapp.com/JigWG8oj1hj1YXLgJaqxta

β€ *N.G 06*π
chat.whatsapp.com/IP9QW1ODZ7g0QvNTCSzAdy

_Please join only one group_
`
const Menu3 =`
γ *πͺWhatsApp Menuπͺ* γ


β’βββΒ»Β» *W.G 01*Β«Β«ββββ’
chat.whatsapp.com/JVEdzU42Qmw3KsOkBApTOM

β’βββΒ»Β» *W.G 02*Β«Β«ββββ’
chat.whatsapp.com/K5niEonkgRiGqnkAxmdlVZ

β’βββΒ»Β» *W.G 03*Β«Β«ββββ’
chat.whatsapp.com/DjG7hi3kL7mCzP9UwRe38m

β’βββΒ»Β» *W.G 04*Β«Β«ββββ’
chat.whatsapp.com/DJzGuFUOXZOFRlG6APWR6a

β’βββΒ»Β» *W.G 05*Β«Β«ββββ’
chat.whatsapp.com/FaPZBiAK37Y2my4RenHm5K

β’βββΒ»Β» *W.G 06*Β«Β«ββββ’
chat.whatsapp.com/GsqFiZpJhC61zOIwmyrTD0

β’βββΒ»Β» *W.G 07*Β«Β«ββββ’
chat.whatsapp.com/DMhkJIM1NCm8Nsh5iBeNaF

β’βββΒ»Β» *W.G 08*Β«Β«ββββ’
chat.whatsapp.com/Brn9KwB4vf29PFvvV2LV4x

β’βββΒ»Β» *W.G 09*Β«Β«ββββ’
chat.whatsapp.com/Gd4zEu4zXuUG1IgKIbBLRI

β’βββΒ»Β» *W.G 010*Β«Β«ββββ’
chat.whatsapp.com/LSvMNWDgtcmJTzKRJ7gzkh

`
const lasiimg = await axios.get(`https://netfiletolink.herokuapp.com/30084`, { responseType: 'arraybuffer' })
const lasiimg2 = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
const lasiimg3 = await axios.get(`https://telegra.ph/file/427f410697252103d826d.jpg`, { responseType: 'arraybuffer' })


if (Config.WORKTYPE == 'private') {

        XTroid.addCMD({pattern: 'grp', fromMe: true, deleteCommand: false,}, (async (message, match) => {


        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    
      }));
}

if (Config.WORKTYPE == 'public') {
    XTroid.addCMD({pattern: 'grp', fromMe: false, deleteCommand: false,}, (async (message, match) => {

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    }));
        
    XTroid.addCMD({pattern: 'grp', fromMe: true, deleteCommand: false,}, (async (message, match) => {

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    }));
}
