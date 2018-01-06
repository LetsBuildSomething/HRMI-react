import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import App from './containers/app'
import Home from './containers/home'
import About from './containers/about'
import LogIn from './containers/LogIn'
import Register from './containers/Register'
import Header from './containers/Header'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <Router history={history}>
        
        <div>
        <Header
          appName="IDEO"
          currentUser="" />

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/register" component={Register}/>
        </div>
    </Router>
  </Provider>,
  target
)