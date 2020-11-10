const leveling = require('discord-leveling');

module.exports = {
  name: "level",
  description: "Bleh"

async run (client, message, args) {

let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
 
    let output = await leveling.Fetch(user.id)
    message.channel.send("Hey ${user}, jesteś na ${output.level} z ${output.xp} xp! Czyż to nie wspaniała wiadomość?");
    }
    }
