const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "%"

client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('discord.gg')){
      if(!message.channel.guild) return;
      message.delete()
  return message.reply(`** ممنوع نشر سيرفرات أخرى بالسيرفر
  يمكن تاخذ ميوت ساعه لو بقيت تنشر  **`)
  }

client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('youtube')){
      if(!message.channel.guild) return;
      message.delete()
  return message.reply(`** ممنوع نشر فيديوهات بالسيرفر
  يمكن تاخذ ميوت ساعه لو بقيت تنشر **`)
  }


client.on('message', message => {
 
  if (message.content === "%mutechannel") {
                      if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("تم تقفيل الشات :white_check_mark: ");
      
           }

if (message.content === "%unmutechannel") {
  if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("تم فتح الشات:white_check_mark:");
      
           }




client.on('message', message => {
  if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc1') {
  if (!args[1]) {
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .addField(' » الرسالة : ', args)
          .setColor('#ff0000')
          // m.send(`[${m}]`);
          m.send(`${m}`,{embed: bc});
      });
  }
  } else {
      return;
  }
});

client.on('message', message=> {
  if (message.author.bot) return;
  if (message.isMentioned(client.user))
  {
  message.reply(" كيف اقدر اساعدك!!");
  }

 client.on("message", message => {
    if(message.content.startsWith("%verify")) {
      let num = Math.floor((Math.random() * 4783) + 10);
    
      message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
        message.channel.awaitMessages(res => res.content == `${num}`, {
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => {
          message.delete();
          m.delete();
          message.member.addRole(message.guild.roles.find(c => c.name == "Verified"));
        }).catch(() => {
          m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
});
})
}
})

client.login('NTIyMjI0NzAwNjAxMDA4MTM0.DvQIgg.KIeXQrO3Jgkakr2HKGGLsEVuLGo');
