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
      embed.setColor("#55FFFF")
      embed.setTitle(`**Pomoc**`)
      embed.addField(`Komendy moderacyjne`, `Dalej pracujemy nad tym... :eyes:`)
      embed.addField(`Komendy 4FUN`, `m!legia, m!losowykolor, m!lech, m!kotek`)
      embed.addField(`Propozycje`, `m!propozycja, m!propozycja_anonim`)
      embed.addField(`Zaproszenie`, `https://discord.com/api/oauth2/authorize?client_id=789417371809873940&permissions=339009&scope=bot`)
      embed.setFooter(`Komenda wywołana przez: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
      });
    }
    
    else if (cmd == "help") {  
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setTitle(`**Pomoc**`)
      embed.addField(`Komendy moderacyjne`, `Dalej pracujemy nad tym... :eyes:`)
      embed.addField(`Komendy 4FUN`, `m!legia, m!losowykolor, m!lech, m!kotek`)
      embed.addField(`Propozycje`, `m!propozycja, m!propozycja_anonim`)
      embed.addField(`Zaproszenie`, `https://discord.com/api/oauth2/authorize?client_id=789417371809873940&permissions=339009&scope=bot`)
      embed.setFooter(`Komenda wywołana przez: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
      });
    }
    
    else if (cmd == "legia") {
       message.channel.send("to stara kurwa")
    }
     
    else if (cmd == "lech") {
           message.channel.send("jebac lech chuje i kurwy")
    }
	  
      else if (cmd == "losowykolor") {
        const randomBetween = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
         const color = [
         randomBetween(0, 255),
         randomBetween(0, 255),
         randomBetween(0, 255),
        ];

       let embed = new Discord.MessageEmbed()
       embed.setColor(color)
       embed.setDescription(color)
       embed.setFooter(`Pierwsza liczba = R, druga liczba = G, trzecia liczba = B`)
           message.channel.send(embed).then(embedMessage => {
      });
    }
	
          else if (cmd == "kotek") {
              // Array list of replies
              const replies = ["https://media2.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif", "https://i.pinimg.com/originals/c3/2b/fa/c32bfa16bcf864e478d3ddfe32440268.gif", "https://i2.wp.com/dianaurban.com/wp-content/uploads/2017/07/01-cat-stretching-feet.gif?resize=500%2C399&ssl=1"];
              // Random number from 0 to 2 for the array index
              const random = Math.floor(Math.random() * 3);

       let embed = new Discord.MessageEmbed()
       .setImage(random)
       embed.setFooter(`Gifów szukał hornaszenko | ąę#2137`)
           message.channel.send(embed).then(embedMessage => {
      });
    }
	  
    else if (cmd == "☆♡♤◇♧") {
       message.channel.send(`**GRATULACJE** twój iPhone 2137 od Microsoftu juz w dostawie!!`)
    }
    
    else if (cmd == "international") {
       const args = message.content.slice(15).trim().split(/ +/g);
       let wiadomosc = args.slice(0).join(" ");
       message.delete();
       message.channel = message.client.channels.cache.get('797163683666985055');
       message.channel.donald = message.client.channels.cache.get('797409837608075274');
       message.channel.kraina = message.client.channels.cache.get('797167770756186153');
       message.channel.kenaj = message.client.channels.cache.get('797196573452533801');
       message.channel.send(`${message.author.tag}` + ` ` + `napisał/a:` + ` ` + `**` + wiadomosc + `**`)
       message.channel.kraina.send(`${message.author.tag}` + ` ` + `napisał/a:` + ` ` + `**` + wiadomosc + `**`)
       message.channel.kenaj.send(`${message.author.tag}` + ` ` + `napisał/a:` + ` ` + `**` + wiadomosc + `**`)
       message.channel.donald.send(`${message.author.tag}` + ` ` + `napisał/a:` + ` ` + `**` + wiadomosc + `**`)
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
bot.login(`Nzg5NDE3MzcxODA5ODczOTQw.X9xwOA.dYfB9LcYGiToq1WMclcZymUjOIc`); 
