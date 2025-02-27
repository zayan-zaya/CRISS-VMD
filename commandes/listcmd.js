const config = require('../../settings')
const { cmd, commands } = require('../command');

cmd({
    pattern: "list",
    alias: ["listcmd","commands"],
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` ⊷━❮ *DOWNLOAD CMD* ❯━┈⊷
╭───────────────        
┋▸
┋▸📄 COMMAND: .play
┋▸❕ Download Audio from yt
┋▸ 
┋▸📄 COMMAND: .song
┋▸❕ Download song from yt
┋▸ 
┋▸📄 COMMAND: .apk
┋▸❕ Download apk from playstore
┋▸ 
┋▸📄 COMMAND: .video
┋▸❕ Download video from yt
┋▸ 
┋▸📄 COMMAND: .fb
┋▸❕ Download  video from fb
┋▸ 
┋▸📄 COMMAND: .tk
┋▸❕ Download video from tiktok
┋▸ 
┋▸📄 COMMAND: .ig
┋▸❕ Download video from ig
┋▸ 
┋▸📄 COMMAND: .gdrive
┋▸❕ Download drive files
┋▸ 
┋▸📄 COMMAND: .twitter
┋▸❕ Download video from Twitter
┋▸
┋▸📄 COMMAND: .img
┋▸❕ Download image
┋▸
┋▸📄 COMMAND: .darama
┋▸❕ Download full episode video
┋▸
┋▸📄 COMMAND: .play2
┋▸❕ Download Audio from yt
┋▸ 
┋▸📄 COMMAND: .video2
┋▸❕ Download video from yt
┋▸ 
┋▸📄 COMMAND: .baiscope
┋▸❕ Download video from baiscope
┋▸ 
┋▸📄 COMMAND: .mfire
┋▸❕ Download mediafire files
╰━━━━━━━━━━━━⪼ 

 ⊷┅┅❮ *ANMIE CMD* ❯━┈⊷
╭─────────────
┋▸
┋▸📄 COMMAND: .yts
┋▸❕ Serch videos from yt
┋▸
┋▸📄 COMMAND: .king
┋▸❕ get king about 
┋▸
┋▸📄 COMMAND: .dog
┋▸❕ get random dog imgs
┋▸
┋▸📄 COMMAND: .anime 
┋▸❕ get anime pics
┋▸
┋▸📄 COMMAND: .waifu
┋▸❕ get animegirl pics
┋▸
┋▸📄 COMMAND: .loli
┋▸❕ get romantic anime pics
╰━━━━━━━━━━━━⪼  

 ┅┅┅❮‍ *INFO CMD* ❯━┈⊷
╭─────────────
┋▸
┋▸📄 COMMAND: .alive
┋▸❕ Check online or not
┋▸  
┋▸📄 COMMAND: .ping
┋▸❕ Check bot speed
┋▸  
┋▸📄 COMMAND: .menu
┋▸❕ Nero main menu
┋▸ 
┋▸📄 COMMAND: .allmenu
┋▸❕ Nero main allmenu
┋▸ 
┋▸📄 COMMAND: .ai
┋▸❕ chat with ai bot
┋▸
┋▸📄 COMMAND: .system
┋▸❕ check bot systems
┋▸
┋▸📄 COMMAND: .owner
┋▸❕ get owner info
┋▸ 
┋▸📄 COMMAND: .status
┋▸❕ check bot runtime
┋▸
┋▸📄 COMMAND: .about 
┋▸❕ get about bot 
┋▸
┋▸📄 COMMAND: .list 
┋▸❕ get bot command list
┋▸
┋▸📄 COMMAND: .script 
┋▸❕ get bot repository 
╰━━━━━━━━━━━━⪼

 ⊷┅┅❮ *OTHER CMD* ❯┅┈⊷
╭─────────────
┋▸
┋▸📄 COMMAND: .joke 
┋▸❕ Get Rendom joke 
┋▸ 
┋▸📄 COMMAND: .fact
┋▸❕ Get Rendom fact
┋▸
┋▸📄 COMMAND: .githubstalk 
┋▸❕ Get github data any user
┋▸ 
┋▸📄 COMMAND: .gpass
┋▸❕ Get a strong password 
┋▸
┋▸📄 COMMAND: .hack
┋▸❕ prank with friends 
┋▸
┋▸📄 COMMAND: .srepo 
┋▸❕ serch repository 
┋▸
┋▸📄 COMMAND: .define 
┋▸❕ serch any words
╰━━━━━━━━━━━━⪼

 ⊷┅┅❮ *GROUP CMD* ❯┅┈⊷
╭─────────────
┋▸
┋▸📄 COMMAND: .mute
┋▸❕ Mute group
┋▸
┋▸📄 COMMAND: .unmute
┋▸❕ Unmute group
┋▸
┋▸📄 COMMAND: .left
┋▸❕ left group
┋▸
┋▸📄 COMMAND: .jid
┋▸❕ group jid
┋▸
┋▸📄 COMMAND: .remove
┋▸❕ remove member from group
┋▸
┋▸📄 COMMAND: .delete 
┋▸❕ remove sms from group 
┋▸
┋▸📄 COMMAND: .add
┋▸❕ add members in group 
┋▸
┋▸📄 COMMAND: .kick
┋▸❕ kick any user 
┋▸
┋▸📄 COMMAND: .kickall
┋▸❕ remove all members from group
┋▸
┋▸📄 COMMAND: .setgoodbye
┋▸❕ set member leave sms
┋▸
┋▸📄 COMMAND: .setwelcome 
┋▸❕ set member welcome sms
┋▸
┋▸📄 COMMAND: promote 
┋▸❕ make group admin
┋▸
┋▸📄 COMMAND: .demote 
┋▸❕ dissmis any admin 
┋▸
┋▸📄 COMMAND: .tagall
┋▸❕ mention group all members
┋▸
┋▸📄 COMMAND: .getpic
┋▸❕ get group profile
┋▸
┋▸📄 COMMAND: .invite 
┋▸❕ get group invite link
┋▸
┋▸📄 COMMAND: .revoke 
┋▸❕ reset group link
┋▸
┋▸📄 COMMAND: .joinrequests
┋▸❕ cheack group panding members
┋▸
┋▸📄 COMMAND: .allreq
┋▸❕ add group panding members 
┋▸
┋▸📄 COMMAND: .lockgc
┋▸❕ lock group private
┋▸
┋▸📄 COMMAND: .unlockgc
┋▸❕ unlock group all
┋▸
┋▸📄 COMMAND: .leave 
┋▸❕ left any group 
┋▸
┋▸📄 COMMAND: .updategname
┋▸❕ set group name
┋▸
┋▸📄 COMMAND: .updategdesc
┋▸❕ set group description 
┋▸
┋▸📄 COMMAND: .joim
┋▸❕ join invite link 
┋▸
┋▸📄 COMMAND: .hidetag
┋▸❕ mention any user hide
┋▸
┋▸📄 COMMAND: .ginfo
┋▸❕ get group information 
┋▸
┋▸📄 COMMAND: .disappear on
┋▸❕ on disappear sms in group 
┋▸
┋▸📄 COMMAND: .disappear off
┋▸❕ off disappear sms in group 
┋▸
┋▸📄 COMMAND: .senddm
┋▸❕ send disappear sms in group 
┋▸
┋▸📄 COMMAND: .disappear 7d 24h 90d
┋▸❕ set time to disappear sms
╰━━━━━━━━━━━━⪼

 ⊷┅┅❮ *OWNER CMD* ❯┅┈⊷
╭─────────────
┋▸
┋▸📄 COMMAND: .update
┋▸❕ update bot velue 
┋▸
┋▸📄 COMMAND: .restart 
┋▸❕ restart your bot
┋▸
┋▸📄 COMMAND: .settings
┋▸❕ see bot settings
┋▸
┋▸📄 COMMAND: .owner 
┋▸❕ get owner number 
┋▸
┋▸📄 COMMAND: .repo 
┋▸❕ get bot repository 
┋▸
┋▸📄 COMMAND: .system 
┋▸❕ check bot systems
┋▸
┋▸📄 COMMAND: .block
┋▸❕ block any user 
┋▸
┋▸📄 COMMAND: .unblock 
┋▸❕ unblock any user 
┋▸
┋▸📄 COMMAND: .shutdown 
┋▸❕ logout your bot
┋▸
┋▸📄 COMMAND: .clearchats 
┋▸❕ clearchats from ib
┋▸
┋▸📄 COMMAND: .setpp
┋▸❕ update profile pic
┋▸
┋▸📄 COMMAND: .broadcast 
┋▸❕ creat broadcast 
┋▸
┋▸📄 COMMAND: .jid
┋▸❕ get jid any user
┋▸
┋▸📄 COMMAND: .gjid 
┋▸❕ get group jid
╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⪼

 ⊷┅┅❮ *CONVERT CMD* ❯━┈⊷
╭──────────────
┋▸📄 COMMAND: .sticker
┋▸❕ convert photo to sticker
┋▸
┋▸📄 COMMAND: .tts
┋▸❕ change text to voice 
┋▸
┋▸📄 COMMAND: .trt 
┋▸❕ change languages 
╰┄┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⪼
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/hhwdau.jpeg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: '𝐂𝐑𝐈𝐒𝐒 𝐕𝐌𝐃',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/criss-vevo/CRISS-VMD/raw/refs/heads/main/autovoice/intro.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
