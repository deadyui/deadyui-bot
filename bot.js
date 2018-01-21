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
    	message.reply('**Here is a list of my current commands:**\n\n~ping\n~om\n~yum\n~kill me\n~help');
  	}
    if (message.startsWith === '~userinfo') {
    	message.reply('**User Info:**\n\n');
    }
    if (message.content === '~userinfo') {
    	message.reply('**Here is a list of my current commands:**\n\n~ping\n~om\n~yum\n~kill me\n~help');
    }
});

client.login(process.env.BOT_TOKEN);
