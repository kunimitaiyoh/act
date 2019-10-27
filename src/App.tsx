import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Counter from "./views/Counter";
import Home from "./views/Home";
import ActivityRoute from './components/app/ActivityRoute';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <ActivityRoute path="/counter" activity={ Counter } />
        <ActivityRoute path="/counter/:value" activity={ Counter } />
        <Route component={ () => <div>Not Found</div> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
