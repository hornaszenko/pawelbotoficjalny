const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on("ready", () => {
  console.log(bot.user.tag + " is ready!");
  client.user.setActivity("seks!!!!!",{TYPE:WATCHING});
});

bot.on("message", (message) => {
  let msg = message.content;
  if (message.author.bot) return;


  if (msg.toLowerCase() == "siusior!") {
    message.react(':rofl:');
    message.react(':joy:');
    message.react(':joy_cat:');
  }

    if (msg.toLowerCase() == "XDDDDDDD") {
     message.channel.send("ze smiechu sie dusze dzwoncie po karetke")
  }
       if (msg.toLowerCase() == "XD") {
     message.channel.send("smiesznosc")
  }
})

// siema ja jestem kiki85uuuu
bot.login(`ODExNTczMDc4NjM4MTk4ODA0.YC0KVA.EPAUQMc_RD7z7FQvjC7n2QBtMOA`);
