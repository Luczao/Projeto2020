var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Você não pode executar esse comando!');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('Você precisa mencionar alguem!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('Esse usuario não existe!');

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('Você precisa digitar um motivo!');

    const channel = msg.guild.channels.cache.find(ch => ch.id === `782255645034151986`);

    var log = new Discord.MessageEmbed()
    .setTitle('Usuario alertado')
    .setColor('#1500FF')
    .addField('Usuario:', user, true)
    .addField('Por:', msg.author, true)
    .addField('Motivo:', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('Você foi avisado!')
    .setDescription(reason);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }
}