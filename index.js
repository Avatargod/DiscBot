//const { Client, GatewayIntentBits, Partials } = require('discord.js');
//const client = new Client({
//  intents: [
//    GatewayIntentBits.Guilds, 
//    GatewayIntentBits.GuildMessages, 
//    GatewayIntentBits.MessageContent
//  ], 
//  partials: [
//    Partials.Channel
//  ]
//});
const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] });

module.exports = client

client.on('interactionCreate', (interaction) => {
  if (interaction.type === Discord.InteractionType.ApplicationCommand) {
    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd) return interaction.reply(`Error`);
    interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
    cmd.run(client, interaction);
  }
});

//--- Escrita quando o bot inicializa ---//
client.on("ready", async () => {
  console.log(`✔️  Bot logado como ${client.user.username}!`);
});

client.slashCommands = new Discord.Collection();

require('./handler')(client);

//--- Usa o token do bot no discord para logar ---//
client.login(config.token);
