import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/question" component={Question} />
        <Route path="/result" component={Result} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
