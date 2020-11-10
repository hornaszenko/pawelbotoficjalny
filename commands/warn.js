const Discord = require('discord.js');

const db = require('quick.db');

module.exports = {
    name: "warn",
    description: "Warn a member",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('You can\'t use that');

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send('Prosze opisz kogo chcesz ostrzeżyć.');

        if(user.bot) return message.channel.send('Nie możesz ostrzeżyć bota!');

        if(message.author.id === user.id) return message.channel.send('Nie możesz ostrzeżyć samego sebie!');

        if(message.guild.owner.id === user.id) return message.channel.send('Nie możesz ostrzeżyć właściciela serwera!');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Brak podanego powodu.';

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === 3) return message.channel.send(`${user} ma aktualnie 3 ostrżeżenia.`);


        if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1);
            user.send(`Zostałeś ostrżeżony na ${message.guild.name} za następujący powód: \`${reason}\``)
            await message.channel.send(`**${user.username}** został ostrzeżony`)
        }

        if(warnings !== null){
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`Zostałeś ostrżeżony na ${message.guild.name} za następujący powód: \`${reason}\``)
            await message.channel.send(`**${user.username}** został ostrzeżony`)
        }
    }
