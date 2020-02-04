const Sequelize = require('sequelize')
const ContactsModel = require('./contacts')
const connection = new Sequelize('rentedMule', 'root', 'Brayden9', {
    host: 'localhost',
    dialect: 'mysql'
})

const Contacts = ContactsModel(connection, Sequelize)


module.exports = Contacts