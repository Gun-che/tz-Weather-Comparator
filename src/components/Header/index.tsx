import * as React from 'react'
import s from './index.module.scss'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {

  return (
    <header className={s.header}>
      <div className={s.logo}></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/weather">Weather</Link>
      </nav>
    </header>
  )
}