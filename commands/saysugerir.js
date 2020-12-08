const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("BAN_MEMBERS"))
    return message.channel.send(
          "**Você não tem permissão para executar esse comando! 🚫**"
        );
const embed = new Discord.MessageEmbed()
.setTitle("**Sistema de sugestão**")
.setDescription('**The Kingdoom**')
.setColor("#0407a7")
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.addField("Nos dê uma sugestão, digite aqui neste canal:", "```fix\n*sugerir (sua sugestão)```", false)
.addField("Eu irei sugerir na sala de sugestões para você.", "Vamos lá ✅", false)
.addField("Passível de punição:", "Não utilize esse comando para fins de spam.", false)

.setFooter('Siga as regras e evite advertências ou banimento! Dê *ajuda para ver meus comandos!');
message.channel.send(embed)
}