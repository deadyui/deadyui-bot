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
    if (message.content === '+kill me') {
         message.reply('you are already dead.');
    }
    if (message.content === '+revive me') {
         message.reply('you were never alive.');
    }
    if (message.content === '+should i start studying') {
         message.reply('nah you has plenty of time :sweat_smile:');
    }
});

client.login(process.env.BOT_TOKEN);
