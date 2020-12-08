const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/517f63ce5ffc6426bddd17d7413ebaca/tenor.gif',
  'https://media.giphy.com/media/11mKDvhPQK3TLW/giphy.gif',
  'https://media.giphy.com/media/11zD6xIdX4UOfS/giphy.gif',
  'https://pa1.narvii.com/6503/6291c974e57af254a4657c60adcc016d48647499_hq.gif',
  'https://i.pinimg.com/originals/9e/30/f3/9e30f3ec1e7b1e1fca8b6fc428709efb.gif',
  'https://media.tenor.com/images/b561ad7377142adf365fe33f20fa45e8/tenor.gif'
  
  
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para Bater!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Está Batendo')
        .setColor('#1500FF')
        .setDescription(`${message.author} Acaba de Bater em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('The Kingdoom Todos os Direitos Reservados. ')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}