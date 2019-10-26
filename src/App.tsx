import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Counter from "./views/Counter";
import Home from "./views/Home";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/counter" render={ props => <Counter { ...props } /> } />
        <Route exact path="/counter/:value" render={ props => <Counter { ...props } /> } />
        <Route component={ () => <div>Not Found</div> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
