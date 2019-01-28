const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "%"
client.on('ready', () => {
    console.log('I am ready!');
client.user.setGame(`test-2`,"https://www.twitch.tv/peery13")
client.user.setStatus("dnd")
}); //OUAIL
 
client.on("guildMemberAdd", (member) => {
  let channel = member.guild.channels.find('name', 'chat-sharks');
  if(!channel) {
    console.log("!channel fails");
    return;
  }
  if(member.id === client.user.id) {
    return;
  }
  console.log('made it till here!');
    var guild;
    while (!guild)
    guild = member.guild
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(`**By : ${Invite.inviter}  **`)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});



client.login(process.env.BOT_TOKEN);
