const axios = require('request')

const postContact = async (request, response) => {

    let { name, doing_business_as, type, date_of_birth, ssn, fein_tax, legal_entity_type, date_business_started, phone, phone_type, email, email_type, address, cognito_username, roles, username, confirmation_email } = request.body

    await axios.post('https://embroker-test.britecorepro.com/api/v2/contacts/new_contact', {
        auth: 'api_key: 8d368a8d5ef8384610efaee8c320d3e0aebf052377804f8e90e822e7'
    })
    if (!name || !doin || !releaseDate || !rating || !runTime || !genres) {
        response.status(400).send('The following fields are required: name, doing_business_as, type, date_of_birth, ssn, fein_tax, legal_entity_type, date_business_started, phone, phone_type, email, email_type, address, cognito_username, roles, username, confirmation_email')
    }
}


axios.post()