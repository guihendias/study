const express = require("express");

const server = express();

const checkId = (req, res, next) => {
  if (req.params.id) {
    return next();
  } else {
    return res.send({ error: "Favor informar o id" });
  }
};

server.use(express.json());
server.use(checkId);

const projects = [];

// POST /projects: A rota deve receber id e title dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com àspas duplas.
// GET /projects: Rota que lista todos projetos e suas tarefas;
// PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;
// DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;
// POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title });

  return res.json(projects);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects[id].title = title;

  return res.json(projects);
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  projects = projects.filter(project => project.id !== id);

  return res.send();
});

server.listen(3000);
