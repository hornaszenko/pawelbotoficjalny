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
	
    if (msg.toLowerCase() == "&2137") {
     message.channel.send("ale debil z ciebie jesli sie z tego smiejesz")
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
      embed.addField(`Komendy moderacyjne`, `Ludzie przecież tu nikogo nie ma`)
      embed.addField(`Komendy 4FUN`, `m!legia, m!losowykolor, m!lech`)
      embed.addField(`Propozycje i ankiety`, `m!propozycja_reakcje`)   
      embed.addField(`Zaproszenie`, `Wykup je tu za **5 zł**: [klik](https://tipply.pl/u/hornaszenko)`)
      embed.setFooter(`Komenda wywołana przez: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
      });
    }
    
    else if (cmd == "help") {  
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setTitle(`**Pomoc**`)
      embed.addField(`Komendy moderacyjne`, `Ludzie przecież tu nikogo nie ma`)
      embed.addField(`Komendy 4FUN`, `m!legia, m!losowykolor, m!lech`)
      embed.addField(`Propozycje i ankiety`, `m!propozycja_reakcje`)
      embed.addField(`Zaproszenie`, `Wykup je tu za **5 zł**: [klik](https://tipply.pl/u/hornaszenko)`)
      embed.setFooter(`Komenda wywołana przez: ${message.author.tag}. `)
      message.channel.send(embed).then(embedMessage => {
      });
    }
	  
	    else if (cmd == "ankieta+1-6") {  
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setTitle(`**Dodanie opcji do ankiet**`)
      embed.addField(`Dodaj opcje do ankiet!`,`m!ankieta+1, m!ankieta+2, m!ankieta+3, m!ankieta+4, m!ankieta+5, m!ankieta+6`)
      embed.setFooter(`Komenda wywołana przez: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
      });
    }  
	   else if (cmd == "aktualizacja") { 
       message.channel.send("Aktualizacja powiodła się - Premium v1")
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
	
    else if (cmd == "☆♡♤◇♧") {
       message.channel.send(`**GRATULACJE** twój iPhone 2137 od Microsoftu juz w dostawie!!`)
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
	  
      else if (cmd == "ankieta+1") {  
      const args = message.content.slice(11).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");
      message.delete();
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(`Twórca ankiety: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🅰️");
        embedMessage.react("🅱️");
	embedMessage.react("🇨");      
	      
      });
    }	
      else if (cmd == "ankieta+2") {  
      const args = message.content.slice(11).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");
      message.delete();
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(`Twórca ankiety: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🅰️");
        embedMessage.react("🅱️");
	embedMessage.react("🇨");
	embedMessage.react("🇩");
	      
      });
    }
	  
	 else if (cmd == "ankieta+3") {  
      const args = message.content.slice(11).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");
      message.delete();
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(`Twórca ankiety: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🅰️");
        embedMessage.react("🅱️");
	embedMessage.react("🇨");
	embedMessage.react("🇩");
	embedMessage.react("🇪");
	      
      });
    }  
    	 else if (cmd == "ankieta+4") {  
      const args = message.content.slice(11).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");
      message.delete();
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(`Twórca ankiety: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🅰️");
        embedMessage.react("🅱️");
	embedMessage.react("🇨");
	embedMessage.react("🇩");
	embedMessage.react("🇪");
	embedMessage.react("🇫");
	      
      });
    }  
	  
	      	 else if (cmd == "ankieta+5") {  
      const args = message.content.slice(11).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");
      message.delete();
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(`Twórca ankiety: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🅰️");
        embedMessage.react("🅱️");
	embedMessage.react("🇨");
	embedMessage.react("🇩");
	embedMessage.react("🇪");
	embedMessage.react("🇫");
	embedMessage.react("🇬");      
	      
      });
    }  
	  
	  else if (cmd == "ankieta+6") {  
      const args = message.content.slice(11).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");
      message.delete();
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(`Twórca ankiety: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("🅰️");
        embedMessage.react("🅱️");
	embedMessage.react("🇨");
	embedMessage.react("🇩");
	embedMessage.react("🇪");
	embedMessage.react("🇫");
	embedMessage.react("🇬");  
	embedMessage.react("🇭");  
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
	  
 else if (cmd == "kick") {  
        if(message.channel.type === 'DM') {
            //First check if message channel is not direct message, because you cant kick out of guide 
            message.channel.send('Tej komendy można używać tylko na serwerze.');
            return;
        };
        //Then check if user have permissions to do that
        if(!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send('Nie masz odpowiednich permisji do wyrzucenia użytkownika.');
            return;
        };
        //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.channel.send('Oznacz najpierw osobę którą chcesz wyrzucić');
            return;
        }
        //Get the highest role of user for compare
        let authorHighestRole = message.member.highestRole.position;
        let mentionHighestRole = mentionMember.highestRole.position;
        //If mention user have same or higher role, so show this error msg
        if(mentionHighestRole >= authorHighestRole) {
            message.channel.send('Nie możesz wyrzucić użytkownika z wyższą rangą niż ty!');
            return;
        };
        //Check if your bot can`t kick this user, so that show this error msg 
        if(!mentionMember.kickable) {
            message.channel.send(':x: Nie mam permisji do wyrzucenia użytkownika.');
            return
        };

   mentionMember.kick().then(() => message.channel.send(":white_check_mark: Wyrzucono użytkownika z serwera!"))
    };
}
     else {
      return;
    }  
  });
// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.
bot.login(`ODExNTczMDc4NjM4MTk4ODA0.YC0KVA.tZJR3N8KQT9_b-WgqHkP5riG2_4`);
