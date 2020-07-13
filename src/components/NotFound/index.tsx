import React from 'react'
import s from './index.module.scss'

export const NotFound = () => {
  return (
    <>
      <div className={s.wrap + ' container'}>
        404
        <h3>not found</h3>
      </div>
    </>
  )
}


export default NotFound