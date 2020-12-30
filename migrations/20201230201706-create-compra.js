'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      precoProduto: {
        type: Sequelize.INTEGER
      },
      listaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'lista',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      produtoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'produtos',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Compras');
  }
};