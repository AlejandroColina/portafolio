import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './componentes/AboutMe/index';
import Contact from './componentes/ContactMe/index';
import Projects from './componentes/Project/index';
import Error from './componentes/Error/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
        <Route path='/*' component={Error} />
      </Switch>
    </div>
  );
}

export default App;
