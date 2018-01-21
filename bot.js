const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '~ping') {
    	message.reply('pong');
  	}
    if (message.content === '~om') {
    	message.reply('nomnom');
  	}
    if (message.content === '~yum') {
    	message.reply(':yum:');
  	}
    if (message.content === '~kill me') {
    	message.reply('you are already dead...');
  	}
    if (message.content === '~help') {
    	message.reply('*Here is a list of my current commands:*\n\n ~ping\n~om');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
