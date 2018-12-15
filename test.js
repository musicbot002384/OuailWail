const Discord = require('discord.js');
const fs = require('fs');
const mmss = require('ms');
const client = new Discord.Client();
const prefix = '%'

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
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

client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('%bc')) {
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
    .addField('**__ Server Name | اسم السيرفر__**',`[** __${msg.guild.name}__ **]`,true)
    .addField('**__ OwnerShip | الاونر الاساسي__**',`**${msg.guild.owner}**`,true)
    .addField('**__ Server ID | ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField('**__ Members Count | عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('**__ Online | الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('**__ Verification Level | مستوي الحمايه__**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
    .addField('**__ Region | البلد__**',`[** __${region[msg.guild.region]}__** ]`,true)
    .addField('**__ Text Channels | رومات كتابيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('**__ Voice Channels | رومات صوتيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('**__ Created At | صنع في __**',msg.guild.createdAt.toLocaleString())
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
  return message.reply(`** نشر سيرفرات أخرى ممنوع بالسيرفر **`)
  }
});


client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('youtube.com')){
      if(!message.channel.guild) return;
      message.delete()
  return message.reply(`** روابط اليوتيوب ممنوعة في السيرفر**`)
  }
});



client.on('guildMemberAdd', member => { //LAST CODES -HONRAR-
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "welcome");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
})
 


client.login(process.env.BOT_TOKEN);
