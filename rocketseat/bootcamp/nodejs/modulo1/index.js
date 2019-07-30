const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

const checkParamMiddleware = (req, res, next) => {
  console.log(req)
  if (req.query.age) {
    return next()
  } else {
    return res.redirect('/')
  }
}

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

app.get('/', (req, res) => {
  return res.render('form')
})

app.get('/major', checkParamMiddleware, (req, res) => {
  return res.render('major', { age: req.query.age })
})

app.get('/minor', checkParamMiddleware, (req, res) => {
  return res.render('minor', { age: req.query.age })
})

app.post('/check', (req, res) => {
  if (req.body.age >= 18) {
    return res.redirect('/major?age=' + req.body.age)
  }
  return res.redirect('/minor?age=' + req.body.age)
})

app.listen(3000)
