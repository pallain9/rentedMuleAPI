const models = require('../models')

async function newContact(request, response) {
    let { name, doing_business_as, type, date_of_birth, ssn, fein_tax, legal_entity_type, date_business_started,
        phones: { phone, type }, emails: { email, type, },
        addresses: {
            address_line1,
            address_city,
            address_state,
            address_zip,
            address_country,
            address_city_other,
            address_county_other,
            address_state_other,
            type,
        },
        cognito_username,
        is_god,
        roles,
        username,
        confirmation_email, } = request.body


}

module.exports = newContact