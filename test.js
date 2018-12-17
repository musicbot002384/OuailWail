const Discord = require('discord.js');
const fs = require('fs');
const util = require('util');
const mmss = require('ms');
const client = new Discord.Client();
const prefix = '%'

client.on('ready', () => {
  console.log(`Welcome To Me ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "476577762396864512") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});

client.on("message", message => {
    if (message.content.startsWith("%bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });

client.on('message', message=> {
  if (message.author.bot) return;
  if (message.isMentioned(client.user))
  {
  message.reply(" البوت قيد العمل");
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

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**https://cdn.discordapp.com/attachments/498625534549295114/498825358682882059/kick_metion.png**");
  if(!reason) return message.reply ("**https://cdn.discordapp.com/attachments/498625534549295114/498825956983701514/kick_reson.png**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**This User Is Have High Role**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

  client.on('message', message => {
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
  if (message.mentions.users.size < 1) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if(!reason) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if (!message.guild.member(user)
  .bannable) return message.reply(`This User Is Have High Role !`);
 
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

  client.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = msg.content.split(" ").slice(1);
  
      if(command === "clear") {
          const emoji = client.emojis.find("name", "wastebasket")
      let textxt = args.slice(0).join("");
      if(msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
          msg.delete().then
      msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
  } else {
      msg.delete().then
      msg.delete().then
      msg.channel.bulkDelete(textxt);
          msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
          }    
      }
  }
  });

  client.on('message', async message =>{
    if (message.author.boss) return;
  
  if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    if (command == "mute") {
      if (!message.channel.guild) return;
      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
      let user = message.mentions.users.first();
      let muteRole = message.guild.roles.find("name", "Muted");
      if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
      if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
      let reason = message.content.split(" ").slice(2).join(" ");
      message.guild.member(user).addRole(muteRole);
      const muteembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
      .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
      .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
      .addField("User", user, true)
      message.channel.send({embed : muteembed});
      var muteembeddm = new Discord.RichEmbed()
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setDescription(`      
  ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
  ${message.author.tag} تمت معاقبتك بواسطة
  [ ${reason} ] : السبب
  اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
  `)
      .setFooter(`في سيرفر : ${message.guild.name}`)
      .setColor("RANDOM")
    user.send( muteembeddm);
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  
    return;
  
    }
  
  });
  
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** ممنوع نشر سيرفرات أخرى في سيرفرنا ! **`)
    }
});
 
client.on('message', message => { 
  if (message.content.startsWith(prefix + "id")) {
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
   heg = men
} else {
   heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
   h = mentionned
} else {
   h = message.member
}
      moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL) 
.setColor("#707070")
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
.setFooter(`Last Bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
.setThumbnail(heg.avatarURL);
message.channel.send(id)
}       });
 


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube.com')){
        if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** ممنوع روابط يوتيوب بالسيرفر! **`)
    }
});


client.on('guildMemberAdd', (member) => {
  member.addRole(member.guild.roles.find('name', 'not active'));
  });
   
   
  client.on('message', message => {                      
      if(!message.channel.guild) return;
         if(message.content.startsWith(prefix + 'active')) {
          let modlog = client.channels.find('name', 'فعل-نفسك');
         if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
         message.channel.sendMessage(`اضغط على الصح عشان تتفعل✅`).then(msg => {
         
         
          msg.react('✅')
         .then(() => msg.react('✅'))
       
       
   
         let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
       
         let active = msg.createReactionCollector(activeFilter, { time: 15000 });
       
                                                         
                                 active.on("collect", r => {
                                     message.member.addRole(message.guild.roles.find("name", "Shark"));
                                     message.member.removeRole(message.guild.roles.find("name", "not active"));
                                     msg.delete();
                                     message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));
       
                                     })
                                     })
                                     }
                                     });




const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(0);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "s_chat");
     stewart.send(`<@${member.user.id}> **By:**  <@${inviter.id}>`);
    // stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});



client.login(process.env.BOT_TOKEN);
