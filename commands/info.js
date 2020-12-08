const moment = require('moment');
  moment.updateLocale('pt-BR');
  const Discord = require("discord.js")
  module.exports = {
      config: {
          name: "serverinfo",
          aliases: ['server-info'],
          description: "Mostra as informações do servidor local!",
          example: "*serverinfo",
          usage: '*serverinfo'
      },
      run: async (bot, message, args) => {
          let membros = message.guild.members.cache
          let emojis = message.guild.emojis.cache
          let texto = message.guild.channels.cache.filter(ch => ch.type === 'text')
          let voz = message.guild.channels.cache.filter(bh => bh.type === 'voice')
        
          const embed = new Discord.MessageEmbed()
          .setColor('#1500FF')
          .setTitle(`INFOS DO SERVIDOR`)
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .addField(`Nome:`, `${message.guild.name}`)
          .addField(`Criação:`, `${moment(message.guild.createdTimestamp).format('ll')}`)
          .addField(`Membros:`, `${message.guild.memberCount}`)
          .addField(`Canais de Texto:`, `${texto.size}`)
          .addField(`Canais de Voz:`, `${voz.size}`)
          message.channel.send(embed)
      }
  }