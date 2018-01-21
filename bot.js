const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+om') { 
        message.reply('nom nom');
    }
    if (message.content === '+members') {
        message.reply('There are currently **18** members in the server');
    }
    if (message.content === '+bots') {
        message.reply('There are currently **3** bots in the server:\n\n*deadBot*\n*Mantaro*\n*Mee6*');
    }
    if (message.content === '+clearChat) {
        message.reply('All previous chat in channel has been cleared ^~^');
    }
    if (message.content === '+hehexd') {
         message.reply('T1T1T1T1T1T1T1T1T1T1');
    }
    if (message.content === '+ban ' + user) {
        message.reply('failed');
    }
});

client.login(process.env.BOT_TOKEN);
