const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(bot.user.tag + " is ready!");
});

bot.on("message", (message) => {
  let msg = message.content;
  if (message.author.bot) return;

  
  if(msg.toLowerCase() == "jestem lewakiem") {
    message.channel.send("o ty")
    message.react('😡');
  }

  if (msg.toLowerCase() == "penis") {
    message.react('🤣');
    message.react('😂');
    message.react('😹');
  }
  
  if (msg) == "polaka") {
    message.channel.send("Polaka z dużej litery!")
  
  
 if (msg.substring(0, 2)=="b!"){
    let str = msg.substring(2, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 2);
  
 
    if (cmd == "pomoc") {
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription("**8BALL**")
      embed.addField("b!8ball")
      embed.setDescription("**PROPOZYCJE ITP.**")
      embed.addField("b!ankieta")
      embed.addField("b!propozycja")
      embed.addField("b!propozycja_anonim")
      message.channel.send(embed)
    }
   
   if (cmd == "8ball") {
     const rando_imgs =
'https://pbs.twimg.com/media/Eh3X0CsXkAEnQC5?format=jpg&name=900x900',
'https://pbs.twimg.com/media/DrhRXdRXcAExNZQ?format=jpg&name=large'
'https://media.discordapp.net/attachments/790142899664453662/790143741616586772/unknown.png',
] 
 file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
});     
 }
           else if (cmd == "ankieta") {  
      const args = message.content.slice(9).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");
      message.delete();
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(`Twórca ankiety: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🅰️");
        embedMessage.react("🅱️");
      });
    }
    
    
    else if (cmd == "propozycja_anonim") {  
      const args = message.content.slice(19).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");
      message.delete();
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(`🟩 - tak, 🟨 - nie mam zdania, 🟥 - nie. Twórca propozycji chce pozostać anonimowy.`)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🟩");
        embedMessage.react("🟨");
        embedMessage.react("🟥");
      });
    } 

   
    else {
      return;
    }  
  }       
});
   
// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.

bot.login("Nzg5NDE3MzcxODA5ODczOTQw.X9xwOA.dYfB9LcYGiToq1WMclcZymUjOIc");
