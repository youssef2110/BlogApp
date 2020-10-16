import React from 'react';
import Home from './components/Home';
import PageDetails from './components/PageDetails';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={PageDetails} />
        <Route path="/" component={()=><div>Page not found</div>} />
      </Switch>
    </>
  );
}


export default App;
