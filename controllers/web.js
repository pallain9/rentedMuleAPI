const models = require('../models')

async function postContact(request, response) {
    let { name, doing_business_as, type, date_of_birth, ssn, fein_tax, legal_entity_type, date_business_started,
        phone, email, address, cognito_username, is_god, roles, username, confirmation_email } = request.body
    if (!name || !doing_business_as || !type || !date_of_birth || !ssn || !fein_tax || !legal_entity_type || !date_business_started || !phone
        || !email || !address || !cognito_username || !is_god || !roles || !username || !confirmation_email) {
        response.status(400).send('The following fields are required: name, doing_business_as, type, date_of_birth, ssn, fein_tax, legal_entity_type, date_business_started, phone, email, address, cognito_username, is_god, roles, username, confirmation_email')
    }


    const newContact = await models.Contacts.create({
        name, doing_business_as, type, date_of_birth, ssn, fein_tax, legal_entity_type, date_business_started,
        phone, email, address, cognito_username, is_god, roles, username, confirmation_email
    })

    response.sendstatus(201).send(newContact)
}


module.exports = postContact