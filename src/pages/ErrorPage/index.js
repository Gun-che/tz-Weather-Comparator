import React from 'react'
import PropTypes from 'prop-types'
import * as s from './index.module.scss'

export default function ErrorPage({ err, msg }) {
  return (
    <>
      <div className={s.wrap + ' container'}>
        {err && err}
        {msg && <h3>{msg}</h3>}
      </div>
    </>
  )
}

ErrorPage.propTypes = {
  err: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
}

