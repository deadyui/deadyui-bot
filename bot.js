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
        message.reply('There are currently **6** bots in the server:\n\n*deadBot*\n*Dyno*\n*GiveawayBot*\n*Mee6*\n*Rythm*\n*Tatsumaki*');
    }
    if (message.content === '+crystalClear') {
        message.reply('All previous chat in channel has been cleared ^~^');
    }
    if (message.content === '+hehexd') {
         message.reply('T1T1T1T1T1T1T1T1T1T1');
    }
    if (message.content === '+annoyAdam') {
        message.reply('adam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\nadam\n\nomnomnom ehehehe');
    }
    if (message.content === '+yasuoMain') {
        message.reply('cancer');
});

client.login(process.env.BOT_TOKEN);
