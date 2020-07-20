import * as React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {

  return (
    <header>
      <nav>
        <div className="nav-wrapper blue lighten-3">
          <a href="/" className="brand-logo p-1">
            <i className="large material-icons">ac_unit</i>WC</a>
          <a role="button" href="/" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
            <li><Link to={process.env.PUBLIC_URL + "/weather"}>Weather</Link></li>
            <li><Link to={process.env.PUBLIC_URL + "/wc"}>Weather Comparator</Link></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile">
        <li><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
        <li><Link to={process.env.PUBLIC_URL + "/weather"}>Weather</Link></li>
        <li><Link to={process.env.PUBLIC_URL + "/wc"}>Weather Comparator</Link></li>
      </ul>
    </header>
  )
}