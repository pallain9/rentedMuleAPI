const axios = require('axios')

async function getIndex(request, response) {
    return response.render('index')
}

async function getEmbroker(request, response) {
    return response.render('embroker')
}
async function createContact(request, response) {
    let { name, doing_business_as, date_of_birth, ssn, fein_tax, legal_entity_type, date_business_started, phone, email, addresses: { address_line1, address_city, address_state, address_zip, address_country, address_city_other, address_country_other, address_state_other }, cognito_username, is_god, roles, username, confirmation_email
    } = request.body
    let newContact = await axios.post('https://embroker-test.britecorepro.com/api/v2/contacts/new_contact', {
        auth: 'api_key: 8d368a8d5ef8384610efaee8c320d3e0aebf052377804f8e90e822e7'
    })

    if (!name || !doing_business_as || !type || !date_of_birth || !ssn || !fein_tax || !legal_entity_type || !date_business_started || !cognito_username || !is_god || !roles || !username || !confirmation_email
    )

        return updatedProject
            ? response.render('index', { updatedProject })
            : response.sendStatus(404)

}

async function getProjectReport(request, response) {
    return response.render('getProject')

}

module.exports = { getEmbroker, /*getProjectReport,*/ getIndex }