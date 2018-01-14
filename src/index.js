import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
//import store, { history } from './store'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Home from './views/home'
import About from './views/about'
import LogIn from './views/login'
import Register from './views/register'
import App from './views/app'
import configureStore from './configureStore'
import initialState from './initialState'

const target = document.querySelector('#root')

const store = configureStore(initialState);
//store.dispatch(loadCourses());    //history={history}

render(
  <Provider store={store}>
    <Router>  
        <div>
            <Route path="/" component={App}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/register" component={Register}/>
        </div>
    </Router>
  </Provider>,
  target
)