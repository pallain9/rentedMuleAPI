
const bodyParser = require('body-parser')
const express = require('express')
const { getEmbroker, getIndex, assignRole } = require('./controllers/web')
const path = require('path')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(__dirname + 'static'))
app.use(bodyParser.json())
app.get('/', getIndex)
app.get('/embroker', getEmbroker)
app.post('/role', assignRole)

const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server