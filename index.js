
const bodyParser = require('body-parser')
const express = require('express')
const { postContact } = require('./controllers/web')

const app = express()



const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server