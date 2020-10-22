//Discord
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Bot started");
});

bot.on("message", (message) => {
  let msg = message.content;
  
  //Commands
  if (msg.substring(0, 2)=="s!"){ //Command prefix, like !command
    let str = msg.substring(2, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 2);
    
    //Commands
    switch (cmd){ //Commands here
      case "hi": //Example of a simple command. Use !hi and it says "hi"
        message.channel.send("hi");
      break;
    }
  }
  //Message replies
  else if (message.author.id != "768193728690126889"){ //Replace this number with your bot's user ID
    let channel = message.channel.name; //Channel name
    
    if (msg=="witam"){ //If someone says "hello bot",
      message.channel.send("wilkommen"); //say "hello hooman"
    }
  }
});

bot.login("NzY4MTkzNzI4NjkwMTI2ODg5.X486KQ.8Z0rAPMyEuZfZlakUDmn9RxoQww");
