const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

// const logMiddleware = (req, res, next) => {
//   console.log(
//     `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
//   );

//   req.appName = "GoNode";

//   return next();
// };

// app.use(logMiddleware);

// app.get("/", (req, res) => {
//   return res.send(`Bem-vindo ao ${req.appName}, ${req.query.name}`);
// });

// app.get("/nome/:name", (req, res) => {
//   return res.json({ message: `Bem-vindo, ${req.params.name}` });
// });

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const users = ['Diego Fernandes', 'Robson Marques', 'Cleiton Souza']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)
