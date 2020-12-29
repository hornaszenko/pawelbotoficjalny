const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(bot.user.tag + " is ready!");
});

bot.on("message", (message) => {
  let msg = message.content;
  if (message.author.bot) return;
  

  if (msg.toLowerCase() == "penis") {
    message.react('🤣');
    message.react('😂');
    message.react('😹');
  }



  if (msg.substring(0, 2) == "m!") {
    let str = msg.substring(2, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 2);


    if (cmd == "pomoc") {
      let embed = new Discord.MessageEmbed()
      .setDescription("**POMOC**")
      .addFields(
		{ name: '**4FUN**', value: 'm!legia' },
      message.channel.send(embed)
    }
    
    else if (cmd == "legia") {
       message.channel.send("to stara kurwa")
    }
   
    else {
      return;
    }  
  }       
});

// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.

bot.login("Nzg5NDE3MzcxODA5ODczOTQw.X9xwOA.dYfB9LcYGiToq1WMclcZymUjOIc"); 
