const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
  const id = req.params.id
  const tarefa = tarefas.find(tarefa => tarefa.id == id)

  res.status(200).send(tarefa)
}

exports.post = (req, res) => {
  const { id, dataInclusao, concluido, descricao, nomeColaboradora } = req.body;
  tarefas.push({ id, dataInclusao, concluido, descricao, nomeColaboradora });

  fs.writeFile("./src/model/tarefas.json", JSON.stringify(tarefas), 'utf8', function (err) {
    if (err) {
      return res.status(500).send({ message: err });
    }
    console.log("The file was saved!");
  });

  return res.status(201).send(tarefas);
}

