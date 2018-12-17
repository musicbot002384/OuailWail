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
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** ممنوع نشر سيرفرات أخرى في سيرفرنا ! **`)
    }
});

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
})



client.login(process.env.BOT_TOKEN);
