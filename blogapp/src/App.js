import React from 'react';
import SignIn from './components/SignIn';
import Home from './components/Home';
import PageDetails from './components/PageDetails';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/post/:id" component={PageDetails} />
        <Route path="/" component={()=><div>Page not found</div>} />
      </Switch>
    </>
  );
}


export default App;
