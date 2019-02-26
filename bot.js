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
        if(message.content.startsWith('cowception')||message.content.startsWith('Cowception'))
        {
               console.log("I have been called apon")
               var comands = message.content.split(' ');
               var loops = parseInt(comands[1]);
               console.log(comands); //debug output
               comands.shift(); //remove the 'cowception'
               comands.shift(); //remove the numbers
               var text = comands.join(' ');
               console.log(loops); //more debug
               console.log(text);
               //do loop stuff
               for( var i = 0; i<loops; i++)
               {
                    text = cowsay.say({text:text});
               }
               text = '```'+text+'```';
	           console.log('length = ' + text.length);
               message.channel.send(text);
        }
        else if(message.content.startsWith('ping'))
        {
               message.channel.send('```'+cowsay.say({text:"pong"})+'```');
               console.log('pong');
        }
    }
    catch(error)
    {
        message.channel.send('```'+cowsay.say({text:"error try formating your text as cowception # text"})+'```');
        console.error("error");
    }
});

var cleanupFn = function cleanup() 
{
    console.log("Logging off");
    bot.destroy();
}

process.on('SIGINT', cleanupFn);
process.on('SIGTERM', cleanupFn);
