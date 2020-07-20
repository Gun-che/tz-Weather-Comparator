import React from 'react'
import s from './index.module.scss'

export const LoadingConst: React.ReactElement = <div className={s.fullWrap + ' animEl'}>
  <div className={s.loader} id="loading">loading</div>
</div>

export const LoadingFullScreen: React.FC = () => {
  return (<div className={s.fullWrap + ' animEl'}>
    <div className={s.loader} id="loading">loading</div>
  </div>)
}

export const LoadingThin: React.FC = () => {
  return (<div className={s.wrap + ' animEl'}>
    <div className={s.loader} id="loading">loading</div>
  </div>)
}