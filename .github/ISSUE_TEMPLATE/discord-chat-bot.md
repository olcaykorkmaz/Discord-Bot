---
name: Discord Chat Bot
about: Discord Chat Bot
title: ''
labels: ''
assignees: ''

---

TR: Özelleştirilebilir Discord sohbet botu. Mesaj göndermesini veya silmesini sağlayabilirsiniz.
EN: Customizable Discord chat bot. You can have it send or delete messages.

-> KURULUMU <-

* Öncelikle bilgisayarınıza Node.js ve Atom programlarını kurmanız gerekmektedir.

1. Discord Developer portal sitesinden botunuzu oluşturun ve sunucunuza ekleyin.
2. Bilgisayarınızda yenş bir dosya oluşturun ve shift tuşuna basılı tutarak sağ tıklayın ve powershell ile çalıştırın.
3. açılan konsola 'npm init' yazın ve bekleyin.
4. Package name bölümüne botunuzun ismini girin ve enter'a basın.
5. version bölümüne 0.0.1 yazın ve enter'a basın.
6. Description bölümünü boş bırakıp enter'a basın.
7.  Entry point bölümüne 'bot.js' yazın ve enter'a basın.
8. test command bölümüne 'node bot.js' yazın ve enter'a basın.
9. git repository ve keywords bölümlerini boş bırakıp enter'a basın.
10. author bölümüne kendi discord kullanıcı adınızı yazın ve enter'a basın.
11. licance bölümüne 'ISC' yazın ve enter'a basın.

-> https://discord.js.org/ sitesine gidin ve buradaki keyi konsola yazın ve enter'a basın ardından
kurulumu tamamamlamasını bekleyin.

Kurulum tamamlandıktan sonra dosyanızda 'bot.js' adında yeni bir javascript dosyası oluşturun.

Ardından Atom programını çalıştırın ve bot.js dosyanızı açın.

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Botun artık aktif ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('token');

Bu komutları bot.js dosyanızın içine yapıştırın.
Token kısmına botunuzu oluşturduğunuz panelden botunuza ait token'i yapıştırın

Dosyayı kaydedin ve konsola geri dönün.
Konsola 'node bot.js' yazın ve enter'a basın.
Eğer hata alırsanız konsola 'npm uni discord.js' yazın. Yükleme bittikten sonra
'npm install discord.js@12.5.3' yazın ve bunun da yükleme yapmasını bekleyin. 

Yükleme bittikten sonra artık botunuz hazır. tekrardan konsole 'node bot.js' yazın ve enter'a basın.
"Botun artık aktif" yazısını gördüyseniz botunuz artık sorunsuz çalışıyor demektir.

Sunucuna geri dönün ve deneme amaçlı "ping" yazın.
Botunuz otomatik olarak "pong" cevabını verecektir.

Botunuz sadece "ping" mesajına "pong" cevabı verir. Daha fazla mesaj eklemek için;

client.on('message', msg => {
  if (msg.content === 'kullanıcının yazacağı mesaj') {
    msg.reply('botun vereceği cevap');
  }
});

Kod bloğunu token'dan önce yapıştırın. 

Benim verdiğim kod dosyalarını kurcalayıp ekleme veya çıkarma yaparak kullanabilirsiniz.

** Botunuzu sürekli açmak için konsola 'node bot.js' yazın. bilgisayarınız veya konsol kapandıktan bir süre sonra botunuz çevrimdışı olacaktır.
