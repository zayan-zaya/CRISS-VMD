const { zokou } = require('../framework/zokou');
const {addOrUpdateDataInAlive , getDataFromAlive} = require('../bdd/alive')
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou(
    {
        nomCom : 'alive',
        categorie : 'General'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser} = commandeOptions;

 const data = await getDataFromAlive();

 if (!arg || !arg[0] || arg.join('') === '') {

    if(data) {
       
        const {message , lien} = data;


        var mode = "public";
        if ((s.MODE).toLocaleLowerCase() != "yes") {
            mode = "private";
        }
      
    
     
    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

    const alivemsg = `
*Owner* : ${s.OWNER_NAME}
*Mode* : ${mode}
*Date* : ${date}
*Hours(GMT)* : ${temps}

 ${message}
 
 
 *CRISS VEVO*`

 if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("⚡⚡ Menu erreur " + e);
        repondre("⚡⚡ Menu erreur " + e);
    }
} 
// Checking for .jpeg or .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("⚡⚡ Menu erreur " + e);
        repondre("⚡⚡ Menu erreur " + e);
    }
} 
else {
    
    repondre(alivemsg);
    
}

    } else {
        const audioFiles = [
    'https://files.catbox.moe/hpwsi2.mp3',
    'https://files.catbox.moe/xci982.mp3',
    'https://files.catbox.moe/utbujd.mp3',
    'https://files.catbox.moe/w2j17k.m4a',
    'https://files.catbox.moe/851skv.m4a',
    'https://files.catbox.moe/qnhtbu.m4a',
    'https://files.catbox.moe/lb0x7w.mp3',
    'https://files.catbox.moe/efmcxm.mp3',
    'https://files.catbox.moe/gco5bq.mp3',
    'https://files.catbox.moe/26oeeh.mp3',
    'https://files.catbox.moe/a1sh4u.mp3',
    'https://files.catbox.moe/vuuvwn.m4a',
    'https://files.catbox.moe/wx8q6h.mp3',
    'https://files.catbox.moe/uj8fps.m4a',
    'https://files.catbox.moe/dc88bx.m4a',
    'https://files.catbox.moe/jy8ee7.mp3'
    'https://files.catbox.moe/9j7rh2.mp3'
  ];

  // Randomly pick an audio file from the list
  const selectedAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

  // Audio message object
  const audioMessage = {
    audio: {
      url: selectedAudio,
    },
    mimetype: 'audio/mpeg',
    ptt: true,  // Marking this as a "Push-to-Talk" message
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'shizo',
    contextInfo: {
      externalAdReply: {
        title: '𝐂𝐑𝐈𝐒𝐒 𝐌𝐃 𝐈𝐒 𝐀𝐋𝐈𝐕𝐄 𝐀𝐋𝐋 𝐓𝐇𝐄 𝐓𝐈𝐌𝐄',
        body: conf.OWNER_NAME,
        thumbnailUrl: conf.URL,
        sourceUrl: conf.GURL, // Corrected variable name
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };

  // Send the audio message with the context of the original message
  await zk.sendMessage(dest, audioMessage, { quoted: ms });
})
     }
 } else {

    if(!superUser) { repondre ("Only the owner can  modify the alive") ; return};

  
    const texte = arg.join(' ').split(';')[0];
    const tlien = arg.join(' ').split(';')[1]; 


    
await addOrUpdateDataInAlive(texte , tlien)

repondre(' Holla🫵, *CRISS MD BOT* is alive just like you. ')

}
    });
