import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = lazy(
  () => import(/* webpackChunkName: "Dashboard" */ '../pages/Dashboard'),
);
const Repo = lazy(() => import(/* webpackChunkName: "Repo" */ /* webpackPrefetch: true */'../pages/Repo'));

export const Routes: React.FC = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={Repo} path="/repositories/:repository+" />
      </Switch>
    </Suspense>
  );
};
