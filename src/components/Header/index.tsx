import * as React from 'react'
import s from './index.module.scss'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {

  return (
    <header className={s.header}>
      <nav>
        <div className="nav-wrapper blue lighten-3">

          <a href="/" className="brand-logo p-1">
            <i className="large material-icons">ac_unit</i>WC</a>
          <a role="button" href="/" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/wc">Weather Comparator</Link></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/wc">Weather Comparator</Link></li>
      </ul>
    </header>
  )
}