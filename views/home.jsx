const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                  <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                  <div>
                    Photo by <a href="https://unsplash.com/@good_bear">Morton Xiong</a> on <a href="https://unsplash.com/">UNSPLASH</a>
                  </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places to Rant or Rave About</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
