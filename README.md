# Discord Bot V14

# Introdução
  Tive a necessidade de criar um Bot do Discord e resolvi buscar algo pronto, a base dele está nas referências, porém estou 
criando um comando chamado participando que tem como objjetivo buscar as pessoas logadas nos canais de audio no momento em 
que executa o comando /participando do bot.

Essa é a base de um Discord Bot v14 + Node.js funcional.

Na pasta comandos acrescentei 2 comandos:
- ping; e
- participando.

# Requisitos:
- É necessário ter uma conta no discord;
- Instalar o Node.js; e
- Instalar um editor de código da sua preferência, no caso estou optando pelo VSCode, por ele já possuir um terminal integrado nele.

# Instalação:
- Acessem baixem e instalem o Node.js que pode ser encontrado nesse link: https://nodejs.org/en
- Acessem baixem e instalem o VSCode que pode ser encontrado nesse link: https://code.visualstudio.com/
- Criem uma pasta em sua máquina para abrigar o bot, ex: ..\DiscBot\
- Abram o VSCode, clique em File e Open Folder, localizem e selecionem a pasta que criaram;
- No VSCode pressionem as teclas ( CTRL+` ) para abrir o terminal;
- Sigam com os seguintes comandos:

npm init

(pressione enter, depois de enter até o final sem precisar responder o conteúdo)

npm i discord.js fs

(pressione enter, e aguarde ele baixar os arquivos)

- Abram o navegador e colem esse endereço: https://discord.com/developers/applications
- Daqui em diante sigam os passos desse vídeo para criar um app bot no discord: https://youtu.be/Yr5fzbFb7xU?t=55
- Abram o arquivo "config.json" e colen o token do app do bot que criaram lá, da forma que mostra no vídeo.

PS: Desconsiderem o código desse vídeo pois o código usado aqui é o do vídeo 3 da lista da referência, onde todo o código desse vídeo é desconsiderado.

# Execução:
- Para executar o bot, basta ir no VSCode no terminal ( CTRL+` ), e digitar o seguinte comando:

node .

# Problema atual:
- O Arquivo "Comandos\Utilidade\participando.js" está com um problema de cache, uma vez logado ele exibe os membros logados nas salas de áudio, porém se algum membro sai, ele mantem ele no cache, mesmo depois da atualização ou de uma nova chamada do comando "/participando".
- Atualmente ele verifica os membros online a cada 5 segundos, se quuiserem interromper isso, e deixar exibir somente uma vez a cada vez que der o comando "/participando", basta:
- Edite a linha 34 de: 

setInterval( () => {

- Para:

setTimeout( () => {

# Referências:
- Youtuber O Ferinha = https://www.youtube.com/@OFerinha
- Links base para o Discord Bot V14 = https://www.youtube.com/playlist?list=PLRbMj6F89jbx9ygQpcMcHGl30fcO-EYUw
- Discord.js Guide = https://discordjs.guide/
- Discord.js = https://discord.js.org/docs/packages/builders/1.6.1
