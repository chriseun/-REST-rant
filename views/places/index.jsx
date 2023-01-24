const React = require('react')
const Def = require('../default')


function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className='col-sm-6'>
        <h2>{place.name}</h2>
        <p className='text-center'>
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name}/>
        <p className='text-center'>
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
            {placesFormatted}
            </div>
        </main>
    </Def>
)
}



// GET /places
// app.get('/', (req, res) => {
// let places = [{
//   name: 'H-Thai-ML',
//   city: 'Seattle',
//   state: 'WA',
//   cuisines: 'Thai, Pan-Asian',
//   pic: 'http://placekitten.com/250/250'
// }, {
//   name: 'Coding Cat Cafe',
//   city: 'Phoenix',
//   state: 'AZ',
//   cuisines: 'Coffee, Bakery',
//   pic: 'http://placekitten.com/250/250'
// }]

//  res.render('places/index', { places })
// })

module.exports = index
