const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log("I'm ready!")
})

bot.on('message', msg => {
    if(msg.content == "TT") {
        msg.channel.send("TT is here!")
    }
    
})

bot.on('message', msg => {
    if(msg.content == "question") {
        msg.reply("If you have any questions, please go to the question channel to ask, and the administrator will answer you for you after the them are online, thank you!")
    }
    
})

bot.on('message', msg => {
    if(msg.content == "hello") {
        msg.channel.send("hi")
    }
    
})


bot.login("Nzc4ODk2NTU1NTc0Mjk2NTc2.X7Yp8g.smocrfztbgdbFggueajldN3--dQ")
