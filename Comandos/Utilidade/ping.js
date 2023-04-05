/**
const Discord = require("discord.js");

module.exports = {
  name: "ping", //Coloque o nome do comando
  description: "Veja o ping do bot.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  //options: [
  //  {
  //    name: "",
  //    description: "",
  //    type: Discord.ApplicationCommandOptionType.Role,
  //    require: true
  //  }
  //],
  run: async (client, interaction) => {
    let vcor = "#43b581"; // "Random";

    let ping = client.ws.ping;

    let embed1 = new Discord.EmbedBuilder()
    .setColor(vcor)
    .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
    .setDescription(`🏓 Olá ${interaction.user}, meu ping está em: \`carregando...\``);

    let embed2 = new Discord.EmbedBuilder()
    .setColor(vcor)
    .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
    .setDescription(`🏓 Olá ${interaction.user}, meu ping está em: \`${ping}ms\``);

    interaction.reply({ embeds: [embed1] }).then( () => {
      setTimeout( () => {
        interaction.editReply({ embeds: [embed2] });
      }, 3000);
    });
  }
}
/**/