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

  if (msg.toLowerCase() == "penis") {
    message.react('🤣');
    message.react('😂');
    message.react('😹');
  }
  
    if (msg.toLowerCase() == "odlecieć sam") {
     message.channel.send("w kraine zapomnienia")
  }
  
      if (msg.toLowerCase() == "odleciec sam") {
     message.channel.send("w kraine zapomnienia")
  }
  
      if (msg.toLowerCase() == "w głowie myśli mam") {
     message.channel.send("kiedy skończy się ten stan")
  }
  
       if (msg.toLowerCase() == "w glowie mysli mam") {
     message.channel.send("kiedy skończy się ten stan")
  }
       if (msg.toLowerCase() == "gdy już nie będę sam") {
     message.channel.send("bo wjedzie biały węgorz (ciąg dalszy nastąpi)")
  } 
  
        if (msg.toLowerCase() == "gdy juz nie bede sam") {
     message.channel.send("bo wjedzie biały węgorz (**WAŻNY ALERT** - jeśli zaczynasz piosenkę to napisz dalej tylko jedno w głowie mam a jeśli potwarasz refren drugi raz to pisz ciąg dalszy piosenki (tekst: ``https://www.tekstowo.pl/piosenka,cypis,gdzie_jest_bialy_wegorz____zejscie_.html``)")
  } 
  
         if (msg.toLowerCase() == "gdy już nie będę sam") {
     message.channel.send("bo wjedzie biały węgorz (**WAŻNY ALERT** - jeśli zaczynasz piosenkę to napisz dalej tylko jedno w głowie mam a jeśli potwarasz refren drugi raz to pisz ciąg dalszy piosenki (tekst:``https://www.tekstowo.pl/piosenka,cypis,gdzie_jest_bialy_wegorz____zejscie_.html``)")
  } 
  
        if (msg.toLowerCase() == "tylko jedno w głowie mam") {
     message.channel.send("koksu pięć gram")
  } 
  
       if (msg.toLowerCase() == "tylko jedno w glowie mam") {
     message.channel.send("koksu pięć gram")
  } 
  
           if (msg.toLowerCase() == "ja pierdole ale mam zjazd") {
     message.channel.send("nie chwytam gwiazd jak kłoda leżę")
  } 
  
            if (msg.toLowerCase() == "nie wierzę co się dzieje") {
     message.channel.send("jak kura z głodu pieje")
  } 
  
            if (msg.toLowerCase() == "nie wierze co sie dzieje") {
     message.channel.send("jak kura z głodu pieje")
  } 
 
            if (msg.toLowerCase() == "jak wilkołak do księżyca") {
     message.channel.send("w głowie dziury jak ulica")
  } 
  
            if (msg.toLowerCase() == "jak wilkolak do ksiezyca") {
     message.channel.send("w głowie dziury jak ulica (od teraz pisz tylko z polskimi znakami, nie chce mi sie juz dorabiac dwoch wersji)")
  } 
           if (msg.toLowerCase() == "przed twoją chatą") {
     message.channel.send("rozpuszczam się jak baton")
  } 
           if (msg.toLowerCase() == "który leży na blacie") {
     message.channel.send("zejście jest jak nie wciągacie")
  } 
           if (msg.toLowerCase() == "bracie kurwa ryj mi krzywi") {
     message.channel.send("w głowie burdel jak w tv")
  } 
           if (msg.toLowerCase() == "mnie nie dziwi taki stan") {
     message.channel.send("brak towaru w myślach ćpam")
  } 
  
           if (msg.toLowerCase() == "radę dam albo nie dam") {
     message.channel.send("wszystko kurwa z chaty sprzedam")
  } 
  
           if (msg.toLowerCase() == "w sumie mam już przejebane") {
     message.channel.send("lecz już wszystko jest sprzedane")
  } 
  
           if (msg.toLowerCase() == "ja pierdole same długi") {
     message.channel.send("kinol jak u tabalugi")
  } 
  
           if (msg.toLowerCase() == "dzień drugi bez walenia") {
     message.channel.send("gdzie jest wąż? biała chemia")
  } 
  
           if (msg.toLowerCase() == "jebane zejście tak wykańcza") {
     message.channel.send("jakby w chuja dziabła cię szarańcza")
  } 
  
           if (msg.toLowerCase() == "chemia party") {
     message.channel.send("chce na narty")
  } 
           if (msg.toLowerCase() == "do dilera a nie w alpy") {
     message.channel.send("o żesz kurwa chyba fiknę")
  } 
  
           if (msg.toLowerCase() == "jak w nochala nic nie psiknę") {
     message.channel.send("tak bardzo chcę dotykać gwiazd")
  } 
  
           if (msg.toLowerCase() == "ale nic z tego bo mam zjazd") {
     message.channel.send("totalne kurwa mega zejście")
  }
  
           if (msg.toLowerCase() == "a marzy mi się smoka wejście") {
     message.channel.send("masz hajsy? ci też zalegam?")
  } 
  
           if (msg.toLowerCase() == "no to chuj dziś już nie biegam") {
     message.channel.send("chce mieć kopa jak pantera")
  } 
  
          if (msg.toLowerCase() == "w krechę nie ma u dilera") {
     message.channel.send("już nie na pewno nie")
  } 
  
          if (msg.toLowerCase() == "chyba śmierć rozkłada mnie") {
     message.channel.send("nic już nie przełknę mam dreszcze")
  } 
  
          if (msg.toLowerCase() == "kurwa mać ile jeszcze?") {
     message.channel.send("będzie trwał ten stan")
  } 
  
          if (msg.toLowerCase() == "śnił mi się koksu van") {
     message.channel.send("i hery gram tak dla smaku")
  } 
  
    if (msg.toLowerCase() == "chcę się wozić w cadillacu") {
     message.channel.send("myślami po znajomych biegam [CIĄG DALSZY PÓŹNIEJ]")
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
      embed.addField("Komendy do głosowania", "s!propozycja, s!propozycja_anonim");
      embed.addField("Komendy 4FUN", "s!zupa, s!tylkojednowglowiemam");
      message.channel.send(embed)
    }

    else if (cmd == "zupa") {
      message.channel.send("po twojej pysznej zupie");
      message.react('🥣');
    }
    
      else if (cmd == "tylkojednowgłowiemam") {
      message.channel.send("koksu 5 gram");
      message.react('🌿');
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

bot.login("NzY4MTkzNzI4NjkwMTI2ODg5.X486KQ.8Z0rAPMyEuZfZlakUDmn9RxoQww");
