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

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/wc">
          <WeatherComparator />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
