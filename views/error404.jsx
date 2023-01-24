const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <img src="/images/404" alt="404" />
        <div>
          Photo by <a href="https://unsplash.com/@niuhang">hang niu</a> on <a href="https://unsplash.com/">UNSPLASH</a>
        </div>
      </main>
    </Def>
  )
}

module.exports = error404
