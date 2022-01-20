import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
/*
import { Dashboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';
*/

const 
const Repo = lazy(() => import('../pages/Repo'))

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact/>
      <Route component={Repo} path="/repositories/:repository+"/>
    </Switch>
  )
}
