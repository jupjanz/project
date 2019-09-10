import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Users from './Users/Users'
import Albums from './Albums/Albums'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/users' component={Users}/>
      <Route path='/albums' component={Albums}/>
    </Switch>
)

export default Routes
