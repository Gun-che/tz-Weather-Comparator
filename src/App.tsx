import React from 'react';
import './App.scss';
import loadable from '@loadable/component'
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/weather">Weather</Link>

    </Router>
  );
}

export default App;
