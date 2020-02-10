
const bodyParser = require('body-parser')
const express = require('express')
const { postContact, getEmbroker, getIndex } = require('./controllers/web')
const path = require('path')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/static'));
app.get('/', getIndex)
app.get('/embroker', getEmbroker)

const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server