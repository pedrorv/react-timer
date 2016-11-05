const React = require('react')
const ReactDOM = require('react-dom')
const { Route, Router, IndexRoute, hashHistory } = require('react-router')
const Main = require('Main')

require('style!css!foundation-sites/dist/foundation.min.css')
require('style!css!sass!applicationStyles')
$(document).foundation()

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
)
