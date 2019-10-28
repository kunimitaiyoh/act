import React from 'react';
import { Route } from 'react-router';

function ActivityRoute<T>(props: ActivityRouteProps<T>) {
  return (
    <Route
      exact={true}
      path={ props.path }
      render={ routeProps => {
        return React.createElement(props.activity, routeProps.match.params)
      } }
    />
  );
}

interface ActivityRouteProps<T> {
  path: string;
  activity: React.ComponentType<T>;
}

export default ActivityRoute;
