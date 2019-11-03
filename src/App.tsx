import React from "react";
import { BrowserRouter, Switch, Route, RouteComponentProps } from "react-router-dom";
import { Counter } from "./views/Counter";
import Home from "./views/Home";
import { ActivityDefinition } from "./components/app/types";
import { NotFound } from "./views/NotFound";

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
};

export default App;

function render<T>(activity: ActivityDefinition<T>): React.FunctionComponent<RouteComponentProps<{ [key: string]: string | undefined }>> {
  return props => {
    const params = activity.decoder(props);
    if (params) {
      return React.createElement(activity.Component, { ...params, key: props.match.url });
    } else {
      return <NotFound />;
    }
  };
}
