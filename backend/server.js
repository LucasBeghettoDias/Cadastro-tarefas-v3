// const express = require("express");
// const app = express();
// const cors = require("cors");
// const tarefaRoutes = require("./routes/tarefaRoutes");
// const sequelize = require("./database/db");
// const Tarefa = require("./models/Tarefa");

// app.use(cors());
// app.use(express.json());
// app.use(tarefaRoutes);

// sequelize.sync().then(() => {
//   app.listen(3000, () => {
//     console.log("Servidor rodando em http://localhost:3000");
//   });
// });

const express = require("express");
const cors = require("cors");
const tarefaRoutes = require("./routes/tarefaRoutes");
const sequelize = require("./database/db")
const app = express()

//middleware//
<<<<<<< HEAD

app.use(cors())
app.use(express.json())

//rotas
app.use("/", tarefaRoutes)

//sincronização com o banco - start do server
sequelize.sync()
 .then(()=> {
  console.log("Banco de dados sincronizado com sucesso")
  app.listen(3000, ()=> {
    console.log("Servidor rodando em http://localhost:3000")
  })
 })

 .catch((error) => {
  console.error("Erro ao conectar o banco de dados", error)
 })
=======

app.use(cors)
app.use(express.json())

app,use("/tarefas", tarefaRoutes)

sequelize.sync()
 .then(()=> {
  console.log("Banco de dados sincronizado com sucesso")
  app.listen(3000, ()=> {
    console.log("Servidor rodando em http://localhost:3000")
  })
 })

 .catch((error) => {
  console.error("Erro ao conectar o banco de dados", error)
 })

>>>>>>> 76ef1bae4a57e154af0cd5b14f116d7959941688
