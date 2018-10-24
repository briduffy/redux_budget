import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { ProtectedRoute } from '@devpoint/dps-react-kit'
import FetchUser from './FetchUser'
import Home from './Home'
import Auth from './Auth'
import Contact from './Contact'

const App = () => (
  <>
    <Link to="/contact">Contact Us</Link>
    <FetchUser>
      <Switch>
        <ProtectedRoute exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" render={ (props) => <Auth {...props} type="Login"/>}/>
        <Route exact path="/register" render= { (props) => <Auth {...props} type="Register"/>}/>
      </Switch>
    </FetchUser>
  </>
)

export default App
