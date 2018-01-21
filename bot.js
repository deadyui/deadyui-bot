const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '~om') { 
        message.reply('nom nom');
    }
    if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
    if (message.content === '~run it down mid') {
         message.reply('T1T1T1T1T1T1T1T1T1T1');
     }
});

client.login(process.env.BOT_TOKEN);
