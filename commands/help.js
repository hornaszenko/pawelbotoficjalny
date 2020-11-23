const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(bot.user.tag + " is ready!");
});
  
 if (msg.substring(0, 2)=="now:"){
    let str = msg.substring(4, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 4);
  
 
    if (cmd == "help") {
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription("Już za niedługo :eyes:")
      message.channel.send(embed)
    }
   
    else {
      return;
    }  
  }       
});
// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.

bot.login("NzY4MTkzNzI4NjkwMTI2ODg5.X486KQ.UpuFKklag9t1kjHt1YyiMmYLzWc");

