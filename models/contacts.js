
const Contacts = (connection, Sequelize) => {
    return connection.define('contacts', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        doing_business_as: { type: Sequelize.STRING },
        type: { type: Sequelize.STRING },
        date_of_birth: { type: Sequelize.STRING },
        ssn: { type: Sequelize.STRING },
        fein_tax: { type: Sequelize.STRING },
        legal_entity_type: { type: Sequelize.STRING },
        date_business_started: { type: Sequelize.STRING },
        phones: {
            phone: { type: Sequelize.STRING },
            type: { type: Sequelize.STRING }
        },
        emails: {
            email: { type: Sequelize.STRING },
            type: { type: Sequelize.STRING }
        },
        addresses: {
            address_line1: { type: Sequelize.STRING },
            address_city: { type: Sequelize.STRING },
            address_state: { type: Sequelize.STRING },
            address_zip: { type: Sequelize.STRING },
            address_country: { type: Sequelize.STRING },
            address_city_other: { type: Sequelize.STRING },
            address_county_other: { type: Sequelize.STRING },
            address_state_other: { type: Sequelize.STRING },
            type: { type: Sequelize.STRING },
        },
        cognito_username: { type: Sequelize.STRING },
        is_god: { type: Sequelize.BOOLEAN },
        roles: {},
        username: { type: Sequelize.STRING },
        confirmation_email: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = Contacts