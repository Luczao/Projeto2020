const pagination = require ('discord.js-pagination');
const Discord = require ('discord.js');

module.exports = {
    name: "clear",
    toLowerCase: ["Clear", "CLEAR", " clear", " Clear", " CLEAR"],
    usage: ["[quantidade]"],
    description: "Apaga o número de mensagens que quiseres",
    clientPermissions: ["SEND_MESSAGES", "MANAGE_MESSAGES"],
    userPermissions: ["MANAGE_MESSAGES"],

    async run (client, message, args){

        const Moderação = new Discord.MessageEmbed()
        .setTitle('Moderação')
        .setURL('https://discord.gg/fVXWAaJutE')
        .setDescription('Comandos Utilitarios')
        .addField("Meu prefixo aqui:", `${prefix}`, false)
        .setThumbnail('https://cdn.dribbble.com/users/635160/screenshots/2927182/royale_crown_goodbye_01_dribbble.gif')
        .setColor("#1500FF")
        .addField('`ban`', 'Dê ban a um Membro')
        .addField('`unban`','Retire o ban de um membro')
        .addField('`warn`','Avise um Membro')
        .addField('`kick`','Expulse um membro do servidor')
        .addField('`clear`','Apague mensagens de 0-99')
        .addField('`say`','Fale pelo bot')
        .setTimestamp()

        const Diversão = new Discord.MessageEmbed()
        .setTitle('Diversão')
        .setURL('https://discord.gg/fVXWAaJutE')
        .setDescription('Comando de Diversão do Bot')
        .setThumbnail('https://cdn.dribbble.com/users/635160/screenshots/2927182/royale_crown_goodbye_01_dribbble.gif')
        .setColor("#1500FF")
        .addField('`soco`', 'De socos em alguem!')
        .addField('`kiss`','Beije o amor de sua vida')
        .addField('`moeda`','Gire uma moeda')
        .addField('`avatar`','Veja o avatar')
        .setTimestamp()

        const Utilitarios = new Discord.MessageEmbed()
        .setTitle('Utilitarios')
        .setURL('https://discord.gg/fVXWAaJutE')
        .setDescription('Comandos Utilitarios')
        .setThumbnail('https://cdn.dribbble.com/users/635160/screenshots/2927182/royale_crown_goodbye_01_dribbble.gif')
        .setColor("#1500FF")
        .addField('`saysugerir`', 'Veja como faz para sugerir!')
        .addField('`sugerir`','Faça sua sugestão ao servidor!')
        .addField('`info`','Informações do servidor!')
        .addField('`prefix`','Troque o prefixo do bot!')
        .addField('`online`','Tempo que o bot está online!')
        .setTimestamp()

        

        const pages = [
            Moderação,
            Diversão,
            Utilitarios,
        ]

        const emojiList = ["⏪","⏩"]
        const timeout = '120000';

        pagination (message, pages, emojiList, timeout)
    }
}