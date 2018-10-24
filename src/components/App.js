import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ProtectedRoute } from '@devpoint/dps-react-kit'
import FetchUser from './FetchUser'
import Home from './Home'
import Auth from './Auth'

const App = () => (
  <>
    <FetchUser>
      <Switch>
        <ProtectedRoute exact path="/" component={Home}/>
        <Route exact path="/login" render={ (props) => <Auth {props} type="Login"/>}/>
        <Route exact path="/register" render= { (props) => <Auth {...props} type="Register"/>}/>
      </Switch>
    </FetchUser>
  </>
)

export default App
