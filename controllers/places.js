const { application } = require('express')
const router = require('express').Router()

// app.get('/', (req, res) => {
//   res.render('places/index')
// })
router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/', (req, res) => {
    let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/restaurant-1.jpg'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: '/images/restaurant-2.jpg'
}]

    res.render('places/index', {places})
})


// GET /places
// app.get('/', (req, res) => {
//   res.render('places/index')
// })




module.exports = router
