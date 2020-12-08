const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Você Não Tem Acesso A Este Comando!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('Porfavor Digite a ID do Usuario Para Desbanir!').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('Usuario Invalido!').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Usuario Desbanido com Sucesso ${user.user.tag}`)
                    .setColor('#1500FF')
                    .addField('User ID', user.user.id, true)
                    .addField('user Tag', user.user.tag, true)
                    .addField('Reação do Ban', user.reason != null ? user.reason : 'no reason')
                    .addField('Desbanido Por', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`User ${member.tag} Este Membro Não Está Banido!`)
                    .setColor('#ff0000')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('Ocorreu um Erro Inesperado!')
        });

    }
}