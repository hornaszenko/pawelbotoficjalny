const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(bot.user.tag + " is ready!");
});
  

bot.on("message", (message) => {
  let msg = message.content;
  if (message.author.bot) return;
  
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === '⌊🆕⌉┃listaˑobecności');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Witamy Cię na **Krainie Spokoju**, ${member}`);
});
  
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
      embed.setColor("#55FFFF")
      embed.setTitle(`**Pomoc**`)
      embed.addField(`Komendy moderacyjne`, `Pracujemy nad tym :eyes:`)
      embed.addField(`Komendy 4FUN`, `m!legia`)
      embed.addField(`Propozycje`, `m!propozycja, m!propozycja_anonim`)
      embed.addField(`Zaproszenie`, `https://discord.com/api/oauth2/authorize?client_id=789417371809873940&permissions=384064&scope=bot`)
      embed.setFooter(`Komenda wywołana przez: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
      });
    }
    
    else if (cmd == "legia") {
       message.channel.send("to stara kurwa")
    }

        else if (cmd == "propozycja") {  
      const args = message.content.slice(12).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");
      message.delete();
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(`🟩 - tak, 🟨 - nie mam zdania, 🟥 - nie. Twórca propozycji: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🟩");
        embedMessage.react("🟨");
        embedMessage.react("🟥");
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
