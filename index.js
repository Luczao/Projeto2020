const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const config = require('./config.json');
const ytdlcore = require('ytdl-core');
const ytdl = require('ytdl-core-discord');
const fs = require("fs");
var prefix = config.prefix;



//sistema de separar comandos
client.on('message', message => {
  if (message.author.bot) return;
     if (message.channel.type == 'dm') return;

     let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

     let prefix = prefixes[message.guild.id].prefixes;
 
     if(!message.content.startsWith(prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  
    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {;
   }
   }); 



//avisar que o bot tá on
client.on("ready", () => {
    console.log(`Bot King Iniciado`);
    let activities = [
      `🎄 Feliz Natal! 🎄`,
      `📜ajuda📜`,
      `✨Meu Servidor https://discord.gg/8NUzS4SHPq✨`
  ]
  i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ %
      activities.length]}`, {
      type: "WATCHING"
  }), 1000 * 10);
    });

    //bem vindo 
    client.on("guildMemberAdd", async (member) => { 
      console.log(+ member.user.username + 'entrou no servidor!');
      var role = member.guild.roles.cache.find(role => role.id == "778396005350637568")
      let guild = await client.guilds.cache.get("778389258951327744");
      let channel = await client.channels.cache.get("778452109594853396");
      if (guild != member.guild) {
        return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
       } else {
          let embed = await new Discord.MessageEmbed()
          .setColor("#0407a7")
          .setAuthor(member.user.tag, member.user.displayAvatarURL())
          .setTitle(`Bem-Vindo`)
          .setThumbnail(guild.iconURL({ dynamic: true }))
          .setDescription(`**${member.user}**\r Bem-vindo(a) ao servidor **${guild.name}!**:heart:`)
          .addField("Se divirta!", "Siga as nossas regras")
          .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();
        channel.send(embed);
        member.roles.add(role);
      }
    });
  

  
  client.on("messageReactionAdd", async (reaction, user,) =>{
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if (reaction.message.channel.id === "id do canal que vai ser lido as reações") { 
      if (reaction.emoji.name === '🆗') {
        await reaction.message.guild.members.cache.get(user.id).roles.add("id da role(cargo)"); 
      }
    }
  });
  
  
  client.on("messageReactionRemove", async (reaction, user) =>{
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if (reaction.message.channel.id === "id do canal que vai ser lido as reações") { 
      if (reaction.emoji.name === '🆗') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("id da role(cargo)"); 
      }
    }
  });










    client.login(config.token)
