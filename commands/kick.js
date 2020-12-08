var Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('Você não pode executar esse comando!');
    var user = msg.mentions.users.first();
    if(!user) return msg.reply('Você precisa mencionar alguém!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('Esse usuario não existe!');
    if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Você não pode kickar essa pessoa');

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('Você precisa adicionar uma razão!');

    const channel = msg.guild.channels.cache.find(ch => ch.id === `726323149133578274`);

    var log = new Discord.MessageEmbed()
    .setTitle('Kickado')
    .setColor('#1500FF')
    .addField('Usuario:', user, true)
    .addField('Autor:', msg.author, true)
    .addField('Razão:', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('Você foi kickado!')
    .setDescription(reason);

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }
    member.kick(reason);
}