const React = require('react')
const Nav = require('Nav')

const Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main
