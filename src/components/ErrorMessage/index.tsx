import React from 'react'
import s from './index.module.scss'

export const ErrorMessage: React.FC<{ message: string }> = (
  { message }
) => {

  return (<>
    {message ? (<div className={s.wrap + ' containerCust'}><h2>{message}</h2></div>) : (<div className={s.emptyWrap}></div>)
    }
  </>)
}
