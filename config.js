const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "917760846236" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917760846236";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_44_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDYwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM3LFxuICAgICAgICA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1LFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU0LFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU01Uajc1WU9jWmdDV2dxcS96dVlPTG5lN3diM2NoTzVBdTdSK0xKL0t0Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZVRxM0l5V05UNnlBVmJwY3NqOFhDQVwiLFxuICBcInBob25lSWRcIjogXCIyNDlhZjJkZC02YTUxLTQ4YTUtYjIwYi02NzE4NTJlNDA0NTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAxNzcsXG4gICAgICAxNTMsXG4gICAgICAxMzIsXG4gICAgICA4OCxcbiAgICAgIDE5MixcbiAgICAgIDEwMixcbiAgICAgIDIxMyxcbiAgICAgIDIyOCxcbiAgICAgIDIzMyxcbiAgICAgIDc3LFxuICAgICAgMjI3LFxuICAgICAgMTk5LFxuICAgICAgMjM2LFxuICAgICAgMTA0LFxuICAgICAgMTExLFxuICAgICAgMzYsXG4gICAgICA4MyxcbiAgICAgIDEyMixcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDU0LFxuICAgICAgMTMzLFxuICAgICAgMjE5LFxuICAgICAgOTEsXG4gICAgICAxODgsXG4gICAgICAyNDcsXG4gICAgICA3OCxcbiAgICAgIDExMCxcbiAgICAgIDcwLFxuICAgICAgMjUwLFxuICAgICAgOTYsXG4gICAgICA0NSxcbiAgICAgIDEzMCxcbiAgICAgIDE1MyxcbiAgICAgIDEyNyxcbiAgICAgIDg0LFxuICAgICAgMTgyLFxuICAgICAgMTAsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREE0QllQTjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzc2MDg0NjIzNjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzIzNzA0MjU4Mzk2NDk6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQSDIwODBGRU5mZWhMVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZVRjFTTkJ0M0h6R0d2RUlGamlVdmJJeW0xRmZBdFdINXBrdmRKNWY1Z1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU09KeDc1d3l0eDl5b1hTMjZkL05OVWwwQW9rSkZHMmFnejYxTGhsTlBOckxjUGcrWjU3bGE4UEtaMlBXaG1XTzF2M0s2akxvU0VZTXVaUlk3Q3lKRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZzFqUjQ3MGtHTFZsb2E1blAwU0NxMmdWM1BlZGtselVKYzcvYnEwVFA1NnQxaU81N3VsVjNoUWVrcE1yb0JEOW5PTTdXTzJENGZpQ0NUN2YwOE92aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3NzYwODQ2MjM2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgzOTQ1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURKb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREpvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVFFVaHdHR2xzK1J5VWs5dG04Qjh2Vm9Ub0tsdGJnQ0U2TmZWeEpURmVmND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTA1MDMzMDczLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4Mzc2MDQ1MDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Demon-Lord's-bot",
  ownername:process.env.OWNER_NAME|| "𝔇𝔢𝔪𝔬𝔫×͜×𝔏𝔬𝔯𝔡 😈",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
