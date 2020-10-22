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
  }
  
  if (msg.substring(0, 2)=="s!"){
    let str = msg.substring(2, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 2);

    switch (cmd){
      case "help":
        let helpembed = new Discord.MessageEmbed()
        helpembed.setColor("#55FFFF")
        helpembed.setDescripiton("**test")
        helpembed.setFooter("abc")
        message.channel.send(helpembed)
      case "zupa":
        message.channel.send("po twojej pysznej zupie");
        message.react('🥣');
      case "poll":
        const args = message.content.slice(7).trim().split(/ +/g);
        let suggestion = args.slice(0).join(" ");

        message.delete();

        let pollembed = new Discord.MessageEmbed()
        pollembed.setColor("#55FFFF")
        pollembed.setDescription(suggestion)
        pollembed.setFooter(message.author.tag)

        message.channel.send(pollembed).then(embedMessage => {
          embedMessage.react("👍");
          embedMessage.react("👎");
        });
      break;
    }
  }
});       

// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.

bot.login("NzY4MTkzNzI4NjkwMTI2ODg5.X486KQ.8Z0rAPMyEuZfZlakUDmn9RxoQww");
