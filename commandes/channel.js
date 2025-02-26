const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "main", categorie: "All Groups" }, async (dest, zk, commandeOptions) => {
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

  let infoMsg =      `*CRISS VEVO SUPPORT* 
❒───────────────────❒
╔══════════════════╗
𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐋𝐈𝐍𝐊 𝐇𝐄𝐑𝐄
https://whatsapp.com/channel/0029Vb0HIV2G3R3s2II4181g
╚══════════════════╝
╔══════════════════╗
𝐆𝐈𝐓𝐇𝐔𝐁 𝐑𝐄𝐏𝐎 𝐒𝐓𝐎𝐑𝐘 𝐋𝐈𝐍𝐊
https://github.com/criss-vevo/CRISS-VMD
╚══════════════════╝
╔══════════════════╗
𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 𝐒𝐈𝐓𝐄 𝐋𝐈𝐍𝐊
https://criss-xbot-x15p.onrender.com/
╚══════════════════╝
╔══════════════════╗
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐏𝐀𝐆𝐄 𝐋𝐈𝐍𝐊
https://www.facebook.com/share/14rPTLXjb4/?mibextid=wwXIfr
╚══════════════════╝
╔══════════════════╗
☉︎𝐖𝐏-𝐌𝐄-𝐎𝐖𝐍𝐄𝐑®️
https://wa.me/message/NY5RNQQH2DYTN1
╚══════════════════╝
╔══════════════════╗
♬𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐋𝐈𝐍𝐊♬👇
https://www.youtube.com/@criss-vevo
╚══════════════════╝\n
  `;
    
let menuMsg = `
  &     POWERED BY CRISS VEVO 
❒───────────────────❒`;

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

}); 
