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
    if (message.content === '~ping roulette') {
    	message.reply('@here ouch.. try again?');
    }
    if (message.content === '~murder me') {
    	message.reply('Executing [10-ping murder]');
        message.reply('you will be murdered in 9 pings');
        message.reply('you will be murdered in 8 pings');
        message.reply('you will be murdered in 7 pings');
        message.reply('you will be murdered in 6 pings');
        message.reply('you will be murdered in 5 pings');
        message.reply('you will be murdered in 4 pings');
        message.reply('you will be murdered in 3 pings');
        message.reply('you will be murdered in 2 pings');
        message.reply('you will be murdered in 1 ping');
        message.reply('you has been murdered.');
    }
    if (message.mentions === 'hello') {
        message.reply('Test Success');
    }
    if (message.content === '~run it down mid') {
        message.reply('T1T1T1T1T1T1T1T1T1T1');
    }
});

client.login(process.env.BOT_TOKEN);
