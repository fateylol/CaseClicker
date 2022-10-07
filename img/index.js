const fs = require("fs")
const { Client, Intents, Collection } = require('discord.js');
const Discord = require('discord.js');

const client = new Discord.Client({ intents: 
    [
        `GUILDS`,
        `GUILD_VOICE_STATES`
    ]
});


client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});

client.on('unhandledRejection', error => {
    console.log('Test error:', error);
});

const opusscript = require("opusscript")
const { Routes } = require("discord-api-types/v9")
const { Player } = require("discord-player");
const { AuditLogOptionsType } = require('discord-api-types/v10');
const { ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('@discordjs/builders');

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("/counter/src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("/counter/src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("/counter/src/commands");


client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
});

(async () => {
    for (file of functions) {
        require(`/counter/src/functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "/counter/src/events");
    client.handleCommands(commandFolders, "/counter/src/commands");
    client.login("OTk3NDk0MTA3NTc0Mzc0NDEx.GZsMci.n4wzY4P4dHVXwcW7aG8aL5zUqPMcrCbianH644")
})();
