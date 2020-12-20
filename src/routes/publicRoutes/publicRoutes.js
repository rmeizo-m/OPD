import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const publicRoutes = ({isAuth, component: Component, ...rest}) => {
  return (
    <Route {...rest} component={(props) => ((isAuth) ? (<Redirect to="/" /> ) : (<Component {...props} />))} />
  )
}

export default publicRoutes