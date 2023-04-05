/**/
const Discord = require("discord.js");

module.exports = {
  name: "", // Coloque o nome do comando
  description: "", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: "",
      description: "",
      type: Discord.ApplicationCommandOptionType.Role,
      require: true
    }
  ],
  run: async (client, interaction) => {
    //
  }
}
/**/