import React from 'react';
import { RouteComponentProps, Route, RouteProps } from 'react-router';

function ActivityRoute<T>(props: ActivityRouteProps<T>) {
  return (
    <Route
      exact
      path={ props.path }
      render={ routeProps => React.createElement(props.activity, routeProps.match.params) }
    />
  );
}

interface ActivityRouteProps<T> {
  path: string;
  activity: React.ComponentType<T>;
}

export default ActivityRoute;
