import * as React from 'react'
import s from './index.module.scss'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {

  return (
    <header className={s.header}>
      <div className={s.logo}></div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><a href="/sdsd">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}