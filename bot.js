const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+om') { 
        message.reply('nom nom');
    }
    if (message.content === '+bots') {
        message.reply('removed command');
    }
    }
    if (message.content === '+hehexd') {
         message.reply('T1T1T1T1T1T1T1T1T1T1');
    }
    
    }
});

client.login(process.env.BOT_TOKEN);
