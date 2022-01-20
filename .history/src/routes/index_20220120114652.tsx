import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
/*
import { Dashboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';
*/

const Dashboard = lazy(() => import (/* webpackChunkName: "Dashboard" */ '../pages/Dashboard'))
const Repo = lazy(() => import(/* webpackChunkName: "Repo" */ '../pages/Repo'))

export const Routes: React.FC = () => {
  return (
    <Suspense fallback={'lo'}>
    <Switch>
      <Route component={Dashboard} path="/" exact/>
      <Route component={Repo} path="/repositories/:repository+"/>
    </Switch>
    </Suspense>
  )
}
