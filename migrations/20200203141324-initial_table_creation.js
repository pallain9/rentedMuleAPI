'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contacts', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      doing_business_as: { type: Sequelize.STRING },
      type: { type: Sequelize.STRING },
      date_of_birth: { type: Sequelize.STRING },
      ssn: { type: Sequelize.STRING },
      fein_tax: { type: Sequelize.STRING },
      legal_entity_type: { type: Sequelize.STRING },
      date_business_started: { type: Sequelize.STRING },

      phone: { type: Sequelize.STRING },


      email: { type: Sequelize.STRING },

      addresses: { type: Sequelize.STRING },

      cognito_username: { type: Sequelize.STRING },
      is_god: { type: Sequelize.BOOLEAN },
      roles: { type: Sequelize.STRING },
      username: { type: Sequelize.STRING },
      confirmation_email: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('contacts');

  }
};
