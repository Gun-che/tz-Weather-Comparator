import React from 'react';
import loadable from '@loadable/component'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Header } from './components/Header';
import { LoadingConst } from './components/Loading';

import './App.scss';

const Home = loadable(() => import('./pages/HomePage'), {
  fallback: LoadingConst,
})

const Weather = loadable(() => import('./containers/WeatherContainer'), {
  fallback: LoadingConst,
})

const NotFound = loadable(() => import('./pages/NotFound'), {
  fallback: LoadingConst,
})

const WeatherComparator = loadable(() => import('./containers/WeatherComparatorContainer'), {
  fallback: LoadingConst,
})

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact>
          <Home />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/weather"}>
          <Weather />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/wc"}>
          <WeatherComparator />
        </Route>
        <Route path={process.env.PUBLIC_URL + "*"}>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

