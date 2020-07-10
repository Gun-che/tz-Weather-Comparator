import React from 'react';
import './App.scss';
import loadable from '@loadable/component'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Header } from './components/Header';
import { LoadingConst } from './components/Loading';

const Home = loadable(() => import('./components/HomePage'), {
  fallback: LoadingConst,
})

const Weather = loadable(() => import('./components/Weather'), {
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
      </Switch>
    </Router>
  );
}

export default App;
