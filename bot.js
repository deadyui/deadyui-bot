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
    if (message.content === '+crystalClear') {
        message.reply('All previous chat in channel has been cleared ^~^');
    }
    if (message.content === '+spam \'yummy\''); {
        message.reply('y');
        message.reply('u');
        message.reply('m');
        message.reply('m');
        message.reply('y');
    }
    if (message.content === '+hehexd') {
         message.reply('T1T1T1T1T1T1T1T1T1T1');
    }
});

client.login(process.env.BOT_TOKEN);
