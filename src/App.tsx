import React from 'react';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom'
import Counter from "./views/Counter";
import Home from "./views/Home";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/counter" component={ render(Counter) } />
        <Route exact path="/counter/:value" component={ render(Counter) } />
        <Route component={ () => <div>Not Found</div> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

function render<T>(component: React.ComponentType<T>): React.FunctionComponent<RouteComponentProps<T>> {
  return props => {
    return React.createElement(component, { ...props.match.params, key: props.match.url });
  };
}
