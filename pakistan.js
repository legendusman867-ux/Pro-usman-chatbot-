/**
* @author Zeeshan Altaf
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "pakistan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Zeeshan Altaf",
  description: "Dont Change This Credits Otherwise Your Bot lol",
  commandCategory: "random-img",
  usages: "pakistan",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"",
      
     ];
     var callback = () => api.sendMessage({body:`•𝐁𝐄𝐀𝐔𝐓𝐘 𝐎𝐅 𝐏𝐀𝐊𝐈𝐒𝐓𝐀𝐍🇵🇰  
     
•𝐍𝐀𝐓𝐔𝐑𝐄 𝐎𝐅 𝐏𝐀𝐊𝐈𝐒𝐓𝐀𝐍😘         
                                         [𝐔𝐒𝐌𝟗𝐍 𝐁𝐑𝟗𝐍𝐃]🥰
${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
