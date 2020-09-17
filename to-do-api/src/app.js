const express = require("express")
const app = express()

//rotas
const index = require("./routes/index")
const tarefas = require("./routes/tarefasRoute")

app.use(function (req, res, next) {
  // Definindo permissão de acesso, o * libera acesso a qualquer site
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  next()
})

app.use("/", index)
app.use("/tarefas", tarefas)

module.exports = app
