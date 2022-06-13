import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error from './componentes/Error/index';
import Landing from './componentes/LandingPage/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Landing} />
        <Route path='/*' component={Error} />
      </Switch>
    </div>
  );
}

export default App;
