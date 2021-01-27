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
   
  if (message.content == "Xd") {
    message.channel.send("Serio, mało rzeczy mnie triggeruje tak jak to chore „Xd”. Kombinacji x i d można używać na wiele wspaniałych sposobów. Coś cię śmieszy? Stawiasz „xD”. Coś się bardzo śmieszy? Śmiało: „XD”! Coś doprowadza Cię do płaczu ze śmiechu? „XDDD” i załatwione. Uśmiechniesz się pod nosem? „xd”. Po kłopocie. A co ma do tego ten bękart klawiaturowej ewolucji, potwór i zakała ludzkiej estetyki - „Xd”? Co to w ogóle ma wyrażać? Martwego człowieka z wywalonym jęzorem? Powiem Ci, co to znaczy. To znaczy, że masz w telefonie włączone zaczynanie zdań dużą literą, ale szkoda Ci klikać capsa na jedno „d” później. Korona z głowy spadnie? Nie sondze. „Xd” to symptom tego, że masz mnie, jako rozmówcę, gdzieś, bo Ci się nawet kliknąć nie chce, żeby mi wysłać poprawny emotikon. Szanujesz mnie? Używaj „xd”, „xD”, „XD”, do wyboru. Nie szanujesz mnie? Okaż to. Wystarczy, że wstawisz to zjebane „Xd” w choć jednej wiadomości. Nie pozdrawiam")

  if (msg.substring(0, 2) == "m!") {
    let str = msg.substring(2, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 2);
    
   if (cmd == "pomoc") {  
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setTitle(`**Pomoc**`)
      embed.addField(`Komendy moderacyjne`, `m!kick`)
      embed.addField(`Komendy 4FUN`, `m!legia`)
      embed.addField(`Propozycje`, `m!propozycja, m!propozycja_anonim`)
      embed.addField(`Zaproszenie`, `https://discord.com/api/oauth2/authorize?client_id=789417371809873940&permissions=339009&scope=bot`)
      embed.setFooter(`Komenda wywołana przez: ${message.author.tag}.`)
      message.channel.send(embed).then(embedMessage => {
      });
    }

    else if (cmd == "legia") {
       message.channel.send("to stara kurwa")
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

+ const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
+ client.commands = new Discord.Collection();

// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.

bot.login(process.env.TOKEN); 
