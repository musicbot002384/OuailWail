const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('+bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );  //7md
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "DgPro-BC";
    let request = `Requested By ${message.author.username}`;  //7md
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))  //7md
    .then(() =>msg.react('✅'))  //7md



    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });  //7md
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });  //7md
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));  //7md
    message.guild.members.forEach(m => {
    var bc = new  
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)  //7md
       .addField('الرساله', args)  //7md
       .setThumbnail(message.author.avatarURL)  //7md
       .setFooter(copy, client.user.avatarURL); //7md
    m.send({ embed: bc })
    msg.delete();  //7md
    })
    })
    reaction2.on("collect", r => {  //7md
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));   //7md
    msg.delete();  //7md  
    })  //7md
    }) //7md
    }  //7md
    }) //7md

client.login('NTIyMjI0NzAwNjAxMDA4MTM0.DvQIgg.KIeXQrO3Jgkakr2HKGGLsEVuLGo');
