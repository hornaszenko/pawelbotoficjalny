const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Bot started");
});

bot.on("message", (message) => {
  let msg = message.content;
  if (message.author.bot) return;

  if(msg == "witam") {
    message.channel.send("wilkommen")
    message.react('👋');
  }
  
 if(msg == "<@768193728690126889>") {
    message.channel.send("No ale prefixu zapomniałeś? Trzymaj tu: s!")
  }
  
   if(msg == "nie ruszam dupy z klopa") {
    message.channel.send("ta zupa była z mlekiem")
  }
  
   if(msg == "na mleko mam alergie") {
    message.channel.send("po twojej pysznej zupie")
  }
  
  if (msg.substring(0, 2)=="s!"){
    let str = msg.substring(2, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 2);

    if (cmd == "help") {
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
       embed.setDescription("**Pomoc**")
     embed.addField("Komendy do głosowania", "s!ankieta like");
     embed.addField("Komendy 4FUN", "s!zupa");
      message.channel.send(embed)
    }
    else if (cmd == "zupa") {
      message.channel.send("po twojej pysznej zupie");
      message.react('🥣');
    }
    else if (cmd == "ankieta like") {  
      const args = message.content.slice(7).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");

      message.delete();

      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(message.author.tag)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("👍");
        embedMessage.react("👎");
      }
      else if (cmd == "ankieta a b") {  
      const args = message.content.slice(7).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");

      message.delete();

      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(message.author.tag)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🅰️");
        embedMessage.react("🅱️");
              else if (cmd == "propozycja") {  
      const args = message.content.slice(7).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");

      message.delete();

      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter("🟩 - tak, 🟨 - nie mam zdania, 🟥 nie.)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🟩");
        embedMessage.react("🟨");
        embedMessage.react("🟥");
   ;]}
    }  
    else {
      return;
    }
  }
});       

// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.

bot.login("NzY4MTkzNzI4NjkwMTI2ODg5.X486KQ.8Z0rAPMyEuZfZlakUDmn9RxoQww");
