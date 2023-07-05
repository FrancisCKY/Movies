const express = require("express")
const { engine } = require("express-handlebars")
const app = express()
const port = 3000

app.use(express.static('public'))

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.redirect('/movies')
})

app.get('/movies', (req, res) => {
  res.render('home')
})

app.get('/movies/:id', (req, res) => {
  const id = req.params.id
  res.send(`Read movie:${id}`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})