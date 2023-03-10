// require('dotenv').config()

// const express = require('express')
// const app = express()

// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())

// app.use('/places', require('./controllers/places'))

// app.get('/', (req, res) => {
//     res.render('home')
//     // res.send('Hello world!')
// })

// app.get('/', (req, res) => {
//     res.render('places/index')
//     // res.send('Hello world!')
// })

// app.get('*', (req, res) => {
//     // res.status(404).render('error404')
//     render('error404')
// })

// app.listen(process.env.PORT)
// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)
