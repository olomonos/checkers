import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import { Home } from './handlers/home';
import { Chapaev } from './handlers/chapaev';
import { NotFound } from './handlers/not-found';
import { store } from "./store";
import { Header } from './components/header/header';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/(home)?" exact component={Home} />
          <Route path="/chapaev" component={Chapaev} />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
    </Router>
  </Provider>
)

export default App;
