// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize('cadastro_tarefas', 'tarefas_user', '123456', {
//   host: "localhost",
//   dialect: "mysql"
// });

// module.exports = sequelize;


// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "backend/database/tarefas.sqlite"
// });

// module.exports = sequelize;

const { Sequelize } = require("sequelize"); // ✅ Importa a classe Sequelize corretamente

const sequelize = new Sequelize("cadastro_tarefas", "tarefas_user", "123456", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;


