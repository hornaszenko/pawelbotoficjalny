const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Bot started");
});

bot.on("message", (message) => {
  let msg = message.content;
  if (message.author.id == "768193728690126889") return;
  
  if (msg.substring(0, 2)=="s!"){
    let str = msg.substring(2, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 2);
    
    switch (msg){  // Odpowiedzi na normalne wiadomości
      case "witam":
        message.channel.send("wilkommen");
      break;
    }

    switch (cmd){  // Komendy
      case "help":
        message.channel.send("Tu nic nie ma ¯\_(ツ)_/¯");
      break;
    }
  }
});

bot.login("NzY4MTkzNzI4NjkwMTI2ODg5.X486KQ.8Z0rAPMyEuZfZlakUDmn9RxoQww");
