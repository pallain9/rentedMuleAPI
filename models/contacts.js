const models = require('./models')


const Contacts = (connection, Sequelize) => {
    return connection.define('new_contact', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        doing_business_as: { type: Sequelize.STRING },
        type: { type: Sequelize.STRING },
        date_of_birth: { type: Sequelize.STRING },
        ssn: { type: Sequelize.STRING },
        fein_tax: { type: Sequelize.STRING },
        legal_entity_type: { type: Sequelize.STRING },
        date_business_started: { type: Sequelize.STRING },

        phones: { type: Sequelize.JSON },

        emails: { type: Sequelize.JSON },

        addresses: { type: Sequelize.STRING },
        cognito_username: { type: Sequelize.STRING },
        is_god: { type: Sequelize.BOOLEAN },
        roles: { type: Sequelize.STRING },
        username: { type: Sequelize.STRING },
        confirmation_email: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = Contacts