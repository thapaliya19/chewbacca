'use strict';

const dotenv = require("dotenv");

dotenv.config();

const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT || 8080);

const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Uhhhhhh...Uhhhh..');
}

const helloReplies = [
    'huuguughghg',
    'nuuawh',
    'uughghhhgh',
    'huurh raaaaaahhgh',
    'uuh uughguughhhghghghhhgh',
    'hnnnhrrhhh huurh huuguughghg',
    'huuguughghg aarrragghuuhw aaaaahnr',
    'aguhwwgggghhh aaahnruh aarrragghuuhw',
    'uggguh uughguughhhghghghhhgh aarrragghuuhw uughghhhgh aaahnruh',
    'huurh raaaaaahhgh huurh wrrhwrwwhw uggguh',
    'huurh aarrragghuuhw raaaaaahhgh',
    'huuguughghg aaaaahnr uuh',
    'aaahnruh aarrragghuuhw uggguh uughghhhgh',
    'uughghhhgh huurh raaaaaahhgh uughguughhhghghghhhgh huurh',
    'ggwwwrghh',
    'wwwwwwwgggghhhrrrrw',
    'rwgwgwarahhhhwwrggwrwrw',
    'wagrrrrwwgahhhhwwwrrggawwwwwwrr'
]
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
            const index = Math.floor(Math.random() * helloReplies.length);
            msg.channel.send(`\**${helloReplies[index]}**`, attachment);
        }
        else if(message.startsWith('chewie ') || message === 'chewie') {
            // const attachment = new MessageAttachment('./img/hello.jpg');
            const index = Math.floor(Math.random() * helloReplies.length);
            msg.channel.send(`\**${helloReplies[index]}**`, {
                tts: true
            });
        }
    }
}

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret