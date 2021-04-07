const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODI1OTYxMjkxOTQ3OTY2NDc0.YGFiZQ.8s5AYCVysXjy3lV7YmZ16NSnfXM';


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === 'Hello') {
        message.reply('Hello, world!')
    }
});

client.login(token);