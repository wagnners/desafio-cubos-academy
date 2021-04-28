import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppLayout from './views/layout';

const Home  = React.lazy(()  => import('./views/home'));
const Movie = React.lazy(() => import('./views/movie'));

const Routes = (props) =>{
  return (
    <Router>
      <AppLayout {...props}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} />}
          />
          <Route
            path="/movie"
            exact
            render={(props) => <Movie {...props} />}
          />
          <Redirect to="/error" />      
        </Switch>
      </AppLayout>
    </Router>
  )
};

export default Routes;
