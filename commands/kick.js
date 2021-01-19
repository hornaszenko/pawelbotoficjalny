module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send(":x: Nie masz odopowiednich uprawnień!");
        }
        else {
            if(!message.mentions.users.first()){
                message.channel.send(":x: Nie oznaczyłeś żadnego użytkownika.")
                return;
            }
            let memberid = message.mentions.users.first().id;
            let member = message.guild.members.cache.get(memberid);
            if (member) {
                try {
                    if (memberid === message.author.id) {
                        message.channel.send(":x: Nie możesz wyrzucić samego siebie.")
                        return;
                    }
                    if (member.hasPermission("KICK_MEMBERS")) {
                        message.channel.send(":x: Nie można wyrzucić użytkownika.")
                        return;
                    }
                    await member.kick();
                    message.channel.send(":white_check_mark:" + "**" + member.user.tag + "** został wyrzucony z serwera.")
                }
                catch (err) {
                    console.log(err);
                    message.channel.send(":warning: Wystąpił błąd. Zgłoś to do właściciela bota.")
                }
            }
            else {
                message.channel.send(":x: Taki użytkownik nie istnieje.")
            }
        }
    },
    aliases: [],
    description: "Wyrzuca wybraną osobę z serwera."
}
