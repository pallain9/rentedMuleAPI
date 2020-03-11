
const bodyParser = require('body-parser')
const express = require('express')
const { getEmbroker, getIndex, assignRole } = require('./controllers/web')
const { getContactByParams } = require('./controllers/contactsModule')
const path = require('path')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(__dirname + 'static'))
app.use(bodyParser.json())
app.get('/', getIndex)
app.get('/contact', getContactByParams)
app.post('/role', assignRole)
/*app.post('/newcontact', async (request, response) => {
    const { } = request.body

    const newContact = await axios.post('https://embroker-test.britecorepro.com/api/v2/contacts/add_contact_to_role', {
        auth: {
            api_key: '8d368a8d5ef8384610efaee8c320d3e0aebf052377804f8e90e822e7'
        }

    })
    response.sendStatus(201).send(newContact)
})*/

const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server