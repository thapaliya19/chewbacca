'use strict';

const dotenv = require("dotenv");

dotenv.config();

const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('uugggh raaaaaahhgh');
  res.end();
}).listen(process.env.PORT || 8080);

const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Uhhhhhh...Uhhhh..');
    client.user
    .setPresence({
      status: 'online',
      activity: {
        type: 'PLAYING',
        name: `uugggh raaaaaahhgh`,
      },
    })
    .then(console.log)
    .catch(console.error);
}

const replies = require('./replies.json');

try {
    client.on('message', messageReceived);
}
catch(err) {
    console.log(err);
}

function messageReceived(msg) {
    const message = msg.content.toLowerCase();
    if(!msg.author.bot) {
        if(message.startsWith('chewie happy')) {
            const attachment = new MessageAttachment('./happy.jpg');
            const index = Math.floor(Math.random() * replies.length);
            msg.channel.send(`\**${replies[index]}**`, attachment);
        }
        else if(message.startsWith('chewie ') || message === 'chewie') {
            // const attachment = new MessageAttachment('./img/hello.jpg');
            const index = Math.floor(Math.random() * replies.length);
            msg.channel.send(`\**${replies[index]}**`, {
                tts: true
            });
        }
    }
}

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret