const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(bot.user.tag + " is ready!");
});

bot.on("message", (message) => {
  let msg = message.content;
  if (message.author.bot) return;

  if(msg.toLowerCase() == "witam") {
    message.channel.send("wilkommen")
    message.react('👋');
  }

  
  if(msg.toLowerCase() == "jestem lewakiem") {
    message.channel.send("o ty")
    message.react('😡');
  }

  if (msg.toLowerCase() == "penis") {
    message.react('🤣');
    message.react('😂');
    message.react('😹');
  }
  
 if (msg.substring(0, 2)=="b8b!"){
    let str = msg.substring(2, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 2);
  
 
    if (cmd == "pomoc") {
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription("**Wkrótce! :eyes:**")
      message.channel.send(embed)
    }
   
    else {
      return;
    }  
  }       
});
// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.

bot.login("NzY4MTkzNzI4NjkwMTI2ODg5.X486KQ.UpuFKklag9t1kjHt1YyiMmYLzWc");
