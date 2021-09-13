import tmi from 'tmi.js'
import fs from 'fs'
import yml from 'yaml'

const file = fs.readFileSync('./env.yml', 'utf8')
const result = yml.parse(file)
console.log(result)