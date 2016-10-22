import * as React from 'react'
import * as ReactDOM from 'react-dom'
// The use of browserHistory requires server side work. cbf
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router'

import { App } from './components/App'
import { Hello } from './components/Hello'
import { Goodbye } from './components/Goodbye'
import { NoMatch } from './components/NoMatch'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={Goodbye}/>
    <Route path="/hello" component={Hello}/>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('example'))
