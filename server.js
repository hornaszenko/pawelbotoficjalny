const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(bot.user.tag + " is ready!");
});

bot.on("message", (message) => {
  let msg = message.content;
  if (message.author.bot) return;

  
  if(msg.toLowerCase() == "jestem lewakiem") {
    message.channel.send("o ty")
    message.react('😡');
  }

  if (msg.toLowerCase() == "penis") {
    message.react('🤣');
    message.react('😂');
    message.react('😹');
  }
  
  
 if (msg.substring(0, 2)=="b8b!"){
    let str = msg.substring(4, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 4);
  
 
    if (cmd == "pomoc") {
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription("**Wkrótce! :eyes:**")
      message.channel.send(embed)
    }
   
// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.

bot.login("Nzg5NDE3MzcxODA5ODczOTQw.X9xwOA.M05YZ-0PCKsphHd-a-xHQ6eKV6Q");
