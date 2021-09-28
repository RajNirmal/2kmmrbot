import tmi from 'tmi.js'
import fs from 'fs'
import yml from 'yaml'

const file = fs.readFileSync('./env.yml', 'utf8')
const result = yml.parse(file)
console.log(result)

const client = new tmi.client(result)
client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)
client.connect()

function onMessageHandler(target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim();
    console.log(context)
    console.log("target "+ target)
    console.log("Received Text :  "+ commandName)
    console.log(context.username + " is the username")

    client.say(target,  context.username + " is the user who sent the text")

    Promise.resolve(result)

}

function onConnectedHandler(addr, port) {
    console.log('Connected to '+ addr + ' : '+ port)
}