const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
   let scrag = client.user.displayAvatarURL;
let embed = new Discord.RichEmbed()
.setTitle("Пинг!")
.setAuthor("ScragBot", scrag)
.setDescription(`Понг! Задержка - ${msg.createdTimestamp - msg.createdTimestamp}мс. Задержка хостинга - ${Math.round(client.ping)}мс.`)
.setColor("#009482");
   msg.channel.send(embed);
 }
client.on('guildMemberAdd', member => {
var role1 = msg.guild.roles.find('name', 'ᅠ ᅠ ᅠ 🔻Ранг🔻');
var role2 = msg.guild.roles.find('name', 'ᅠ ᅠ ᅠ 🔻Игровые роли🔻');
var role3 = msg.guild.roles.find('name', 'ᅠ ᅠ ᅠ 🔻Прочее🔻');
var role4 = msg.guild.roles.find('name', '☀️Пользователь☀️');
member.addRole(role1);
member.addRole(role2);
member.addRole(role3);
member.addRole(role4);
   });
 });

client.login(process.env.BOT_TOKEN);
