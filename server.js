const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
fetchInvites: true,
token: "top secret bot token", //Discord Bot Token
prefix: "prefix", //Customizable
fetchInvites: true
})
bot.onMessage() //Allows to run Commands

bot.command({
name: "ping",
code: `$ping Pong!` 
})

bot.status({
  text: "coding with the quizzer",
  type: "COMPETING",
  time: 10
})

bot.command({
name: "command name", //Trigger name (command name)
code: `
$title[embed title]
$description[

I like coding discord bots yay lets gooooooo


]

$footer[footer]
$color[RANDOM]

`
}); //Code
