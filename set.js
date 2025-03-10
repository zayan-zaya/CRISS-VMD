const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lWa0pBMy9UVEttQytaRnBXR1NITERzY1VKcmlaeU84RzQvRURUTnNtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiem1zZ0l1c2xSZDdONms3cWJ5ZXJmaTlLU3JFbnJ1QTNVRzUwUjlmRmhXRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSEo1a01FVHV0NmQ2K2Y0MTFwWkZ4SE0yRXU5R3BTVFNVREQvUldQdGtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUWJ1WHp0QWZmUStMMkVCQWhhaGNId01zcUtkbHBqQ1l5Qkd1ampvcFRzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJNDZySUZTU2xXaVI3aGZmaGlVYmVNL1ovVDYxdEovTDdzTnQxN1hpM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZMVDg1ZTQ0UmNoMURqU0VWVWVKSHYvalI1VUhvY0Q5alVzNkJXL0o4QWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUg2K1J5TWlFSW45KzBQY0NWdU16WlJpT3RRMVIzMXlWdUtLSDJwaTBIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaElucUd6bGNZNkNyYTJyak12SGlvZkhBK1AycXowR2ZoTVIxdnFJQzdEQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJXZnAwVkt1YXV5ckdWTmxNR2JhdURvZUpKMFp6L0RqbnJrOUJMOE1kK2lyVlpkNUNlYXA2YkM1NTBHTTRKZzV5anVqdmdwVnZCYS9HZ3IxT1RkQ0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjQsImFkdlNlY3JldEtleSI6Ik5qWTI4M1NoMGpjTkc0dlBBTU85ZUUwbTExc3l5VEdzQWJRWGM2V2JNQTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9FOE1sZjZZVGdxNHUzeG9kaldJZVEiLCJwaG9uZUlkIjoiZTUxNDFlY2MtM2M2Yy00ZmIyLThlNTAtOGNmMWRlZDAwNGViIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhNeW93WVhKNHpuOHdOVjlUZ0tWSy9uaUkzcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSjNubkpMUW03eDFPOURMK0lGVHBZTUtTUDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUVA0Vk4xV1AiLCJtZSI6eyJpZCI6IjYwMTExNzUwODUyNTo3OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFROa0tnRUVOcWt1YjRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZkFOUnFVOEFXK0NxaGxVZXIybmhrRVIrR2pPOSt3Ym9vYndkVm5URTBGRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOWwyUHBvUWwxWWg5UWRGZFdVMHFSOVlsU1FRZGZiT0w2ckFrcFhuaXk1TlFPZ0FiZjJtZEhMRFE2VEcyOHZ6WFU1V3hGK1A0WTV2T2RieENRTFFNRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkptTGNQenJxZ3BVOTd5eG94Y1hZMjE4NnFpUmFWR25PNUhPSEpjODVLbnFHSUsrQmVEbkJZTk9RM2NRNzFSTU85bWlGZm5wcHBPUVZ6T0k4b3lBNkJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjAxMTE3NTA4NTI1Ojc5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh3RFVhbFBBRnZncW9aVkhxOXA0WkJFZmhvenZmc0c2S0c4SFZaMHhOQlIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDE1NzQ3NTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHlVIn0=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝐂𝐑𝐈𝐒𝐒 𝐕𝐄𝐕𝐎",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255687068672",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'CRISS MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/hhwdau.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  CRISS_CHATBOT : process.env.CRISS_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
