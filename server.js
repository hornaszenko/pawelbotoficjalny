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
  
  client.on('message', message => {
  if (message.content.startsWith('.test')) {

        const channel = message.guild.channels.find('name', 'polls');
        const args = message.content.slice(12).trim().split(/ +/g);
        let suggestion = args.slice(0).join(" ");
        if (!channel) return;

        let embed = new Discord.RichEmbed()
        .setColor("#55FFFF")
        .setDescription('test')
        .setFooter('test', client.user.avatarURL)

    channel.send(embed);
    message.react("👍")
    message.react("👎");

  }
});
  
  if (msg.substring(0, 2)=="s!"){
    let str = msg.substring(2, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 2);

    switch (cmd){
      case "help":
        message.channel.send("Tu nic nie ma.");
      case "zupa":
        message.channel.send("po twojej pysznej zupie");
        message.react('🥣');
      break;
    }
  }
});

// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.

bot.login("NzY4MTkzNzI4NjkwMTI2ODg5.X486KQ.8Z0rAPMyEuZfZlakUDmn9RxoQww");
