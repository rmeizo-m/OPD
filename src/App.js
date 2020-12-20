import React from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import {PrivateRoute, PublicRoutes} from './routes'
import {Header} from './components'
import {
  PublicMainPages,
  PrivateDashboardPages,
  NoPages,
  LoginPage,
  RegistrationPage} from './pages'

  const isAuth = false

const App = () => {
  const location = useLocation();

  return (
    <>
         {(location.pathname !== '/sigin' && location.pathname !=='/siginup')  ? <Header type="public" /> : <Header />  }
        <Switch>
          <Route exact path="/" component={PublicMainPages} />
          <PublicRoutes path="/sigin" component={LoginPage} exact={true} isAuth={isAuth} />
          <PublicRoutes path="/siginup" component={RegistrationPage} exact={true} isAuth={isAuth} />
          <PrivateRoute path="/dashboard" component={PrivateDashboardPages} exact={true} isAuth={isAuth}/>
          <Route path="*" component={NoPages} />
        </Switch>
    </>
  );
}

export default App;
