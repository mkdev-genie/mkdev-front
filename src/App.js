import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import Theme from './Theme';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';

const App = () => (
  <BrowserRouter>
    <Theme>
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/question" component={Question} />
        <Route path="/result/:id" component={Result} />
      </Switch>
    </Theme>
  </BrowserRouter>
);

export default App;
