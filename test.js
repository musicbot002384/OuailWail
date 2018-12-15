const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  var prefix = "%" 
       if (message.author.bot) return;
  if (message.content.startsWith(prefix + "كم")) {
      let uptime = client.uptime;
   
      let days = 0;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;
      let notCompleted = true;
   
      while (notCompleted) {
   
          if (uptime >= 8.64e+7) {
   
              days++;
              uptime -= 8.64e+7;
   
          } else if (uptime >= 3.6e+6) {
   
              hours++;
              uptime -= 3.6e+6;
   
          } else if (uptime >= 60000) {
   
              minutes++;
              uptime -= 60000;
   
          } else if (uptime >= 1000) {
              seconds++;
              uptime -= 1000;
   
          }
   
          if (uptime < 1000)  notCompleted = false;
   
      }
   
      message.channel.send("" +${days} days, ${hours} hrs, ${minutes} , ${seconds} sec+ "");
   
  }
  });

client.on('message', message => {
  if (message.content.split(' ')[0] == '%b')
     message.guild.members.forEach( member => {
       if (!message.member.hasPermission("ADMINISTRATOR"))  return;


         member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                    message.delete();
          
                                                  });
          
                                                });
 clinet.on("message", message => {
     var prefix = "%";

           var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "b")) {
                        if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                        if (!args[1]) {
                          
                               let embed3 = new Discord.RichEmbed()
                                   .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                     .setColor("#FF00FF")
                                        message.channel.sendEmbed(embed3);
                          
                                      } else {

                          
                                         let embed4 = new Discord.RichEmbed()
                                                          .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                              .setColor("#99999")
                             
                                                              message.channel.sendEmbed(embed4);
                                                    message.delete();
                          }
                        }
});

client.on('guildMemberAdd', member => { //LAST CODES -HONRAR-
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "chat");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
})

client.on('message', message=> {
  if (message.author.bot) return;
  if (message.isMentioned(client.user))
  {
  message.reply(" البوت قيد الخدمة");
  }
});

client.on('message', message => {
 
  if (message.content === "%قفل") {
                      if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("تم تقفيل الشات :white_check_mark: ")
         });
           }

if (message.content === "%افتح") {
  if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("تم فتح الشات:white_check_mark:")
         });
           }



});

const moment = require("moment")
client.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban();
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});

client.on('message', function(msg) {
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
  let region = {
      "brazil": "Brazil",
      "eu-central": "Central Europe",
      "singapore": "Singapore",
      "Russia": "Russia",
      "us-central": "U.S. Central",
      "sydney": "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      "london": "London",
      "amsterdam": "Amsterdam",
      "hongkong": "Hong Kong"
  };
 
  if(msg.content.startsWith ('%server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`)
    .addField('**__اسم السيرفر__**',`[** __${msg.guild.name}__ **]`,true)
    .addField('**__الاونر الاساسي__**',`**${msg.guild.owner}**`,true)
    .addField('**__ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField('**__عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('**__الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('**__مستوي الحمايه__**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
    .addField('**__البلد__**',`[** __${region[msg.guild.region]}__** ]`,true)
    .addField('**__رومات كتابيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('**__رومات صوتيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('**__صنع في __**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

client.on("message", message => {
  if(message.content.startsWith("%تفعيل")) {
    let num = Math.floor((Math.random() * 4783) + 10);
  
    message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
      message.channel.awaitMessages(res => res.content == `${num}`, {
        max: 1,
        time: 60000,
        errors: ['time'],
      }).then(collected => {
        message.delete();
        m.delete();
        message.member.addRole(message.guild.roles.find(c => c.name == "Sharks"));
      }).catch(() => {
        m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
});
})
}
})



client.login(process.env.BOT_TOKEN);
