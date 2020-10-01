import React from 'react';
import Home from './components/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="" component={Home} />
        <Route component={()=><div>Page not found</div>} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
