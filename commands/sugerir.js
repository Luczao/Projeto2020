const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    message.delete();
    if (message.channel.id !== '779450277971230770') return;  //ID DA SALA QUE VAI DAR O COMANDO
    if (!args[0]) return;

    //#region Enviará a mensagem:
    const embed = new Discord.MessageEmbed()
     .setColor('0407a7')
     .setTitle('Sistema de sugestão')
     .setDescription(`Sugerido por: ${message.author}`)
     .addField('Sugestão:', args.join(' '))
     .setThumbnail(message.guild.iconURL({ dynamic: true }))
     .setTimestamp()
    const canal = client.channels.cache.get('783900592623321138'); //ID DA SALA QUE VAI IR A SUGESTÃO
    await canal.send(embed).then(msg => {
        msg.react('✅');
        msg.react('🚫');
    });
    //#endregion
}

exports.config = {
    name: 'sugerir',
    aliases: ['sugestao']
}