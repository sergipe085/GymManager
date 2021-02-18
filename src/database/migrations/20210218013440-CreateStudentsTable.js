'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
        id: 
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name: 
        {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: 
        {
          type: Sequelize.STRING,
          allowNull: false
        },
        idade: 
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        peso: 
        {
          type: Sequelize.STRING,
          allowNull: true
        },
        altura: 
        {
          type: Sequelize.STRING,
          allowNull: true
        },
        created_at:
        {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: 
        {
          type: Sequelize.DATE,
          allowNull: false
        }
     })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students');     
  }
};
