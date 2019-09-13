import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Users from './Users/Users'
import Albums from './Albums/Albums'
import Todos from './Todos/Todos'
import Posts from './Posts/Posts'
import Map from './Map/Map'
// import Data from './Data/Data'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/users' component={Users}/>
      <Route exact path='/albums' component={Albums}/>
      <Route exact path='/users/:id' component={Users}/>
      <Route path='/users/:id/albums' component={Albums} />
      <Route path='/users/:id/todos' component={Todos} />
      <Route path='/users/:id/posts' component={Posts} />
      <Route path='/map' component={Map} />
    </Switch>
)

export default Routes
