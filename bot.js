
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
  console.log(`Botun ${client.user.tag}! artık aktif`);
});





//giriş yapan kullanıcıya mesaj atması

client.on('guildMemberAdd', member => {
    // Sunucuya yeni bir üye katıldığında çalışacak kod bloğu
    const genel = member.guild.channels.cache.find(channel => channel.name === 'genel'); // 'genel' kanal adını değiştirebilirsiniz

    if (!genel) return; // genel kanalı bulunamazsa işlemi sonlandır

    // Hoş geldin mesajını gönder
    genel.send(`Hoş geldin, ${member}!`);
});


// mesaj yanıtlama
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('selam!');
  }
});







client.login('TOKEN');
