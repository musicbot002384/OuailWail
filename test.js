const Discord = require('discord.js');
const moment = require("moment");
const fs = require('fs');
const Canvas = require('canvas');
const jimp = require('jimp');
const client = new Discord.Client();
const prefix = '%'

var roles = {};
client.on('guildMemberRemove', member => {
 roles[member.id] = {roles: member.roles.array()};
});
client.on('guildMemberAdd', member => {
if(!roles[member.user.id]) return;
console.log(roles[member.user.id].roles.length);
for(let i = 0; i < roles[member.user.id].roles.length; i++) {
member.addRole(roles[member.user.id].roles);
roles[member.user.id].roles.shift();
}
});

client.on('guildMemberAdd', member => {
  const guild = member.guild;
  guild.channels.find(channel => channel.name === "welcome").send(`**Welcome To Sharks** :shark: ${member.user.username}`);
});



client.on('guildMemberAdd', member => { //LAST CODES -HONRAR-
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "welcome");
     stewart.send(`<@${member.user.id}> Invite By : <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
})

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', 'welcome');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("black")
    .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});

client.on('message', message => {
var prefix = "%"
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ليس لديك برمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(100)});
  };
  
  });

 client.on('message',function(message) {
    let prefix = "%";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
if(!args) return;
message.channel.send(`**# ${args}**`);
}
});

client.on('message', msg => {
  var prefix = "%";
    if(msg.author.bot) return;
      if(msg.content.startsWith(prefix + "owner")) {
        let args = msg.content.split(" ").slice(1);
           if(!args[0]) {
            msg.channel.send("** %owner <message> **")
                return;
                  }
                   var rebel = new Discord.RichEmbed()
                      .setColor("RANDOM")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك
${msg.guild.name}
الرسآلة
${args}
        `)
        .setFooter(` بوآسطة ${msg.author.username}#${msg.author.discriminator}`)
        msg.guild.owner.send(rebel);
        msg.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
                }
});

client.on('ready', () => {
  console.log(`Welcome To Me ${client.user.tag}!`);
  console.log('----------------');
  client.user.setGame(`Sharks Bot %help`,"https://www.twitch.tv/peery13");
      client.user.setStatus("dnd");
});

client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
         ======={MEMBER COMMAD}=======
         %id : الايدي حقك
         %avatar : عرض الآفاتار حقك
         %owner : رسالة لصاحب السيرفر
         %server : معلومات عن السيرفر
         %تقديم : \n التقديم للإدارة
         %invites : كم شخص دخلت للسيرفر
         %ping : بنق البوت
         %help : عرض هذه الرسالة
         %report : التبليغ عن مخالفة او أي شيء
         ======={ADMIN COMMAD}=======
         %say : البوت يعيد كلامك
         %clear : مسح الشات
         %cl : تقفل الشات
         %op : تفتح الشات
         -----------------------------
         %روم1 :\n عمل روم التقديمات
         %روم2 :\n عمل روم القبول و الرفض
         %قبول :\n تقبل التقديم
         %رفض :\n ترفض التقديم
         %mute : تعطي شخص ميوت
         %unmute : فك الميوت من شخص
         %kick : تطرد شخص من السيرفر
         %ban : تبند شخص
         %bans : الناس المبندبن من السيرفر
         ======={INFO}=======
         منشن البوت يرد عليك
         لو حسابك أقل من أسبوع راح يتبند
         ويــوجد ميــزات كــثير

       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
  if (message.content === "%ping") {
   const embed = new Discord.RichEmbed()

.setColor("RANDOM")
.addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`') //OUAIL
              .setFooter(` Bot By : OUAIL#0090
.`) //OUAIL

message.channel.sendEmbed(embed);
 } //OUAIL
}); //OUAIL

client.on('message', message => {
  if (message.content.startsWith(prefix +"avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

client.on('message', message=> {
  if (message.author.bot) return;
  if (message.isMentioned(client.user))
  {
  message.reply(" **I am ready!**");
  }
});

client.on('message', message => {
 
  if (message.content === "%cl") {
                      if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("تم تقفيل الشات :white_check_mark: ")
         });
           }

if (message.content === "%op") {
  if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("تم فتح الشات:white_check_mark:")
         });
           }


});

client.on('message', function(msg) {
  if(msg.content.startsWith (prefix  + 'server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`Showing Details Of  **${msg.guild.name}*`)
    .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
    .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
    .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
    .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});



  client.on("message", message => {
    if(message.content.startsWith("%تقديم")) {
if(!message.channel.guild) return;
        if(message.author.bot) return;
let channel = message.guild.channels.find("name", "التقديمات")
    if(channel) {
    message.channel.send( message.member + ', **:timer:**').then( (m) =>{
      m.edit( message.member + ', **اسمك **' )
      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
          m1 = m1.first();
          var name = m1.content;
          m1.delete();
          m.edit(message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **عندك كام سنة **' )
              setTimeout(() => {
                m.delete()
              }, 10000);
              m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete()
                  message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                    m.edit( message.member + ', **هل ستتفاعل فى الرومات الصوتيه و الكتابية ؟ 🎙**' )
                    setTimeout(() => {
                      m.delete()
                    }, 10000);
                    m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                        m3 = m3.first();
                        var ask = m3.content;
                        m3.delete();
                        message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                          m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                          setTimeout(() => {
                            m.delete()
                          }, 10000);
                          m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                              m4 = m4.first();
                              var ask2 = m4.content;
                              m4.delete();
                              message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً **' )
                                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                    m5 = m5.first();
                                    var ask3 = m5.content;
                                    m5.delete();
                                    message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                      m.edit( message.member + ', **ماهو مستواك في الدسكورد خبرتك في الإدارة و كم لك في الدسكورد؟**' )
                                      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m6) => {
                                          m6 = m6.first();
                                          var ask4 = m6.content;
                                          m6.delete();
              m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                setTimeout(() => {
                  let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                .addField('**`الاسم`**', `${name}` , true)
                .addField('**`العمر`**', `${age}` , true)
                .addField('**`هل سيتفاعل ؟`**',`${ask}`)
                .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
                .addField('**`مستواه في الدسكورد؟`**',`${ask4}`)
                .setFooter(`<@${message.author.id}> `,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                channel.send(embed)
                }, 2500);
                setTimeout(() => {
                  mtime.delete()
                }, 3000);

          })
        })
        })
      })
    })
  })
})
})
      })
  })
})
})
    })
  }
}
  });
client.on('message', message=>{
    if(message.content.startsWith("%روم1")) {
    if(!message.channel.guild) return;
        if(message.author.bot) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `ADMINISTRATOR`**");
        message.guild.createChannel("التقديمات", "text").then(c =>{
            c.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false

                  })
        })
message.channel.send("** تم انشاء روم التقديمات بنجاح**")
    }
    })
client.on('message',async message => {
let mention = message.mentions.members.first();
let role = message.content.split(" ").slice(2).join(" ");
let mySupport = message.guild.roles.find('name',role);
if(message.content.startsWith("%قبول")) {
let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
if(!acRoom) return message.reply("%روم2 \n من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
if(acRoom) {
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
if(!mention) return message.reply('منشن شخص');
if(!role) return message.reply('ادخل اسم رتبة');
if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

mention.addRole(mySupport).then(() => {
acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
});
}
}
});
client.on('message',async message => {
let mention = message.mentions.members.first();
if(message.content.startsWith("%رفض")) {
if(!message.channel.guild) return;
let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
if(!acRoom) return message.reply(" %روم2 \n من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
if(!mention) return message.reply("منشن شخص");

acRoom.send(`**${mention} تم رفضك للاسف**`)
}
});
  client.on('message', message=>{
    if(message.content.startsWith("%روم2")) {
 if(!message.channel.guild) return;
        if(message.author.bot) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
        message.guild.createChannel("القبول-الرفض", "text").then(c =>{
            c.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false

                  })
        })
message.channel.send("** تم انشاء روم القبول والرفض بنجاح**")
    }
})

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

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer حقوق الفا كودز و
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer حقوق الفا كودز و
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer حقوق الفا كودز و
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer حقوق الفا كودز و
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer حقوق الفا كودز و
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

client.on('message', message => {
	var prefix = "%"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "kick") {
                 if(!message.channel.guild) return;
           
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
  
    if (message.mentions.users.size < 1) return message.reply("منشن شخص");
    if(!reason) return message.reply ("اكتب سبب الطرد");
    if (!message.guild.member(user)
    .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
  
    message.guild.member(user).kick(7, user);
  
    const banembed = new Discord.RichEmbed()
    .setAuthor('Kicked !', user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("User:",  `[ + ${user.tag} + ]`)
    .addField("By:", `[  + ${message.author.tag} +  ]`)
    .addField("Reason:", `[ + ${reason} +  ]`)
    client.channels.get("522425706421157918").send({embed : banembed})
    }
});

client.on('guildMemberAdd', (member) => {
  member.addRole(member.guild.roles.find('name', 'Shark'));
});





client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
      if (command === "bans") { // الامر
          message.delete(5000)
           if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Error : \` I Dont Have ADMINISTRATOR Permission\`").then(message => message.delete(5000));
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
          if(!message.channel.guild) return;
          message.guild.fetchBans()
          .then(bans => message.channel.send(`\`${bans.size}\` ***: عدد الاشخاص المبندين من السيرفر ***`)).then(message => message.delete(5000))
   
    .catch(console.error);
  }
  });

client.on('message', message => {
    if(message.content.includes('discord.gg','.com','.net','.tv','.io','https://','http://','youtube.com')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
    }
}
});

        client.on('message', async message => {
            if(message.content.includes('discord.gg','.com','.net','https://','http://','.io','.tv','youtube.com')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "RANDOM",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
.setDescription(`**  🔒 لقد تمت معاقبتك  **
**  بسبب نشر الروابط خيو 😏 🐸 **
`)
            .setColor("RANDOM")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)


    }
})

client.on('message', function(message) {
  if(message.content.startsWith(prefix + "report")) {
      let messageArgs = message.content.split(" ").slice(1).join(" ");
      let messageReason = message.content.split(" ").slice(2).join(" ");
      if(!messageReason) return message.reply("**# Specify a reason!**");
  let mUser = message.mentions.users.first();
  if(!mUser) return message.channel.send("Couldn't find user.");
  let Rembed = new Discord.RichEmbed()
  .setTitle("`New Report!`")
  .setThumbnail(message.author.avatarURL)
  .addField("**# - Reported User:**",mUser,true)
  .addField("**# - Reported User ID:**",mUser.id,true)
  .addField("**# - Reason:**",messageReason,true)
  .addField("**# - Channel:**",message.channel,true)
  .addField("**# - Time:**",message.createdAt,true)
  .addField("**# - By:**",message.author.tag,true)
  .setFooter("**لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات**")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
  msg.react("✅")
  msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
  message.guild.owner.send(Rembed)
  message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
  message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', message => {
  var prefix = "%"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();  
let x;                      
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});

  client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});



client.login(process.env.BOT_TOKEN);
