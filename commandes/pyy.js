
const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "bot", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
*ISHI KIDIGITAL NA 👇*

🤖 *WHATSAPP BOT*  🤖

*JUA FAIDA NA KAZI ZA BOT 🤖*

🥏 *linaview status automatically just now bila kutumia MB hata simu yako ikiwa imezima  (autostatus view)*

🥏 *itakufanya uonekane online kila mda (always online)➡ on,off*

🥏 *kudownload music na lyrics  (download)*

🥏 *kudownload video za Facebook na Instagram  (FB & IG downloader)*

🥏 *kutengeneza sticker na logo ( sticker,logo maker)*

🥏 *kudownload picha au video ambayo umetumiwa uione mara moja (antiviewnonce)*

🥏 *Kuona message,video,picture,document mtu alizofuta (antidelete)*

🥏 *kudownload status utayoipenda (status saver)*

🥏 *kuzia kupigiwa video,voice call mda utapakua busy (anticall) on,off*

🥏 *kuzuia mtu kushindwa kutuma link kwenye group lako (antilink)*

🥏 *kuedit picha na voice (editor)*

🥏 *kubadilisha picha kua sticker au short video kua sticker au short sticker kua video (sticker maker)*

🥏  *kuzua mtu kutuma link kwenye group lako (antilink)*

_Haya yote ni kazi ya WhatsApp bot na mengine mengi siwezi orodhesha hapa,,,,,,,WhatsApp bot itakusaidia kuongeza viewers wako baada ya watu kuona unafatilia kila status zao just now nao wataanza kufatilia status zako_

_Njoo nikuwekee WhatsApp bot Utalipia 3,000 Tu_

*POWERED BY CRISS VEVO*
 `;    
let menuMsg = `
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🤫🤫 Menu erreur " + e);
        repondre("🤫🤫 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🤫🤫 Menu erreur " + e);
        repondre("🤫🤫 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 


/*const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "script", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
   *BMW MD IMPORTANT INFO* 
❒───────────────────❒
*GITHUB LINK*
> https://github.com/ibrahimaitech/BMW-MD

*WHATSAPP CHANNEL*
> https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y

*FOR MORE INFO TAP ON THE LINK BELOW*
> https://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS-INFO⁠
╭───────────────────❒
│❒⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒⁠⁠⁠⁠ *DEV* : *Ibrahim Adams*
⁠⁠⁠⁠╰───────────────────❒
  `;
    
let menuMsg = `
     𝑰𝑩𝑹𝑨𝑯𝑰𝑴 𝑨𝑫𝑨𝑴𝑺 𝑺𝑪𝑰𝑬𝑵𝑪𝑬

❒────────────────────❒`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});*/
