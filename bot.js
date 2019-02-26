var cowsay = require('cowsay');
var Discord = require('discord.js');
var auth = require('./auth.json');

// Initialize Discord Bot
var bot = new Discord.Client();

bot.login(auth.token);

bot.on('ready', function (evt) 
{
    console.log('Connected');
});


bot.on('message', message => 
{
    try
    {
        //insert code to do stuff here
        if(messageText.startsWith('cowception')||messageText.startsWith('Cowception'))
        {
               console.log("I have been called apon")
               var comands = messageText.split(' ');
               var loops = parseInt(comands[1]);
               comands.shift; //remove the 'cowception'
               comands.shift; //remove the numbers
               var text = comands.join(' ');
               console.log(comands);
               console.log(loops);
               console.log(text);
               //do loop stuff
        }
        else if(messageText.startsWith('ping')
        {
               message.channel.send(cowsay.say({text:"pong"}));
               console.log('pong');
        }
    }
    catch(error)
    {
        message.channel.send(cowsay.say({text:"error try formating your text as cowception # text"}));
        console.log("error");
    }
});

var cleanupFn = function cleanup() 
{
    console.log("Logging off");
    bot.destroy();
}

process.on('SIGINT', cleanupFn);
process.on('SIGTERM', cleanupFn);
