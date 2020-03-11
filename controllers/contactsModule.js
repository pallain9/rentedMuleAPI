const axios = require('axios')
const bodyParser = require('body-parser')

async function getContactByParams(request, response) {
    const id = parseInt(request.body.id)
    const contact = await axios.get(`https://embroker-test.britecorepro.com/api/v2/contacts/find_contact_by_params`, {
        params: {
            api_key: "8d368a8d5ef8384610efaee8c320d3e0aebf052377804f8e90e822e7",
            name: "Pirke"
        }
    })
    return contact
        ? response.send(contact)
        : response.sendStatus(404)
}


module.exports = getContactByParams