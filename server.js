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
  
 if(msg == "<@768193728690126889>") {
    message.channel.send("No ale prefixu zapomniałeś? Trzymaj tu: s!")
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
     embed.addField("Komendy ogólne", "s!poll");
     embed.addField("Komendy 4FUN", "s!zupa");
      message.channel.send(embed)
    }
    else if (cmd == "zupa") {
      message.channel.send("po twojej pysznej zupie");
      message.react('🥣');
    }
    else if (cmd == "poll") {  
      const args = message.content.slice(7).trim().split(/ +/g);
      let suggestion = args.slice(0).join(" ");

      message.delete();

      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setDescription(suggestion)
      embed.setFooter(message.author.tag)

      message.channel.send(embed).then(embedMessage => {
        embedMessage.react("👍");
        embedMessage.react("👎");
      });
    }  
    else {
      return;
    }
  }
});       

 else if (cmd == "ban") {  

const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
​
const user = message.mentions.users.first(); // returns the user object if an user mention exists
const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)
​
// Check if an user mention exists in this message
if (!user) {
try {
// Check if a valid userID has been entered instead of a Discord user mention
if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
// If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
user = message.guild.members.get(args.slice(0, 1).join(' '));
user = user.user;
} catch (error) {
return message.reply('Couldn\' get a Discord user with this userID!');
}
}
if (user === message.author) return message.channel.send('You can\'t ban yourself'); // Check if the user mention or the entered userID is the message author himsmelf
if (!reason) return message.reply('You forgot to enter a reason for this ban!'); // Check if a reason has been given by the message author
if (!message.guild.member(user).bannable) return message.reply('You can\'t ban this user because you the bot has not sufficient permissions!'); // Check if the user is bannable with the bot's permissions
​
await message.guild.ban(user) // Bans the user
​
const Discord = require('discord.js'); // We need Discord for our next RichEmbeds
const banConfirmationEmbed = new Discord.RichEmbed()
.setColor('RED')
.setDescription(`✅ ${user.tag} has been successfully banned!`);
message.channel.send({
embed: banConfirmationEmbed
}); // Sends a confirmation embed that the user has been successfully banned
​
​
const modlogChannelID = ''; // Discord channel ID where you want to have logged the details about the ban
if (modlogChannelID.length !== 0) {
if (!client.channels.get(modlogChannelID )) return undefined; // Check if the modlogChannelID is a real Discord server channel that really exists
​
const banConfirmationEmbedModlog = new Discord.RichEmbed()
.setAuthor(`Banned by **${msg.author.username}#${msg.author.discriminator}**`, msg.author.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.setColor('RED')
.setTimestamp()
.setDescription(`**Action**: Ban
**User**: ${user.username}#${user.discriminator} (${user.id})
**Reason**: ${reason}`);
client.channels.get(modlogChannelID).send({
embed: banConfirmationEmbedModlog
}); // Sends the RichEmbed in the modlogchannel
}
// Wiadomość od Nomza: neotral jeśli coś spierdolisz to cie zajebie. Naucz się JS proszę.

bot.login("NzY4MTkzNzI4NjkwMTI2ODg5.X486KQ.8Z0rAPMyEuZfZlakUDmn9RxoQww");
