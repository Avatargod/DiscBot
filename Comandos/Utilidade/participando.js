/**/
const Discord = require("discord.js");

module.exports = {
  name: "participação", //Coloque o nome do comando
  description: "Fornece moeda para quem está jogando.", // Coloque a descrição do comando
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
    let ct = 0; // Contador
    let it = 5; // Intervalo
    let canal = client.channels.cache.get("875900801506242612"); // Nome do canal: canal.name;
    let cargo_id = "1091501054329356328"; // Jogando // Coloque o ID do cargo aqui
    //let obj = canal.guild.members.cache.filter(member => member.voice.channel); // Lista pessoas online em canais de voz.
    
    let embed1 = new Discord.EmbedBuilder()
    .setColor(vcor)
    //.setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
    .setDescription(`**🔊  Relatório de membros logados!** \nSolicitado por: ${interaction.user} \n\nLista de membros Logados: (att: ${it}s, ct: ${ct}) \n\`Carregando...\``);

    //interaction.reply({ embeds: [embed1] });
    
    interaction.reply({ embeds: [embed1] }).then( () => {
      //setTimeout( () => {}, (it * 1000));
      //setInterval( () => {}, (it * 1000));
      setInterval( () => {
        ct++;

        //--- Lista de membros logados ---//
        //let obj = canal.guild.members.cache.filter(member => "");
        let obj = canal.guild.members.cache.filter(member => member.voice.channel);
        let lista = ``;
        obj.forEach(element => {
          lista = lista + `- ${element} está no canal: \`${channel.name}\`\n`;
        });
        console.log(lista);

        //--- Edita o embed para fornecer a resposta ---//
        let embed2 = new Discord.EmbedBuilder()
        .setColor(vcor)
        //.setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        .setDescription(`**🔊  Relatório de membros logados!** \nSolicitado por: ${interaction.user} \n\nLista de membros Logados: (att: ${it}s, ct: ${ct}) \n${lista}`);
        
        interaction.editReply({ embeds: [embed2] });
      }, (it * 1000));
    });
  }
}
/**/