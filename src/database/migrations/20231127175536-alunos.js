// NO TERMINAL DIGITAR A LINHA ABAIXO PARA CRIAR A MIGRATION:
// npx sequelize migration:create --name=alunos

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('alunos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    sobrenome: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    idade: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    peso: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    altura: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('alunos'),
};

// NO TERMINAL DIGITAR A LINHA ABAIXO APÓS CRIAR A MIGRATION (ESSE ARQUIVO):
// npx sequelize db:migrate
