const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('Você não tem permissão pra usar esse comando');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('Você precisa mencionar alguem!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Você não pode banir esta pessoa!');
    }

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('Você precisa digitar o motivo!');

    const channel = msg.guild.channels.cache.find(ch => ch.id === `782255645034151986`);

    var log = new Discord.MessageEmbed()
    .setTitle('Usuario banido')
    .setColor('#1500FF')
    .addField('Usuario:', user, true)
    .addField('Por:', msg.author, true)
    .addField('Motivo:', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('Você foi banido do Servidor Kingdoom ')
    .setDescription(reason);

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }
    msg.guild.members.ban(user); 
}