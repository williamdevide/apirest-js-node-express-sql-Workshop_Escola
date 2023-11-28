"use strict";// NO TERMINAL DIGITAR A LINHA ABAIXO PARA CRIAR O SEED:
// npx sequelize seed:generate --name criar-usuarios

const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'admin',
        email: 'admin@email.com',
        password_hash: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};

// NO TERMINAL DIGITAR A LINHA ABAIXO APÓS CRIAR O SEED (ESSE ARQUIVO):
// npx sequelize db:seed:all
