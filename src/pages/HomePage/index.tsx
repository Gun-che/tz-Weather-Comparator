import React from 'react'
import s from './index.module.scss'

export const Home: React.FC = () => {

  return (
    <section className={s.wrap + ' containerCust'}>
      <h2>
        Weather Comparator
      </h2>
      <ul>
        <h3>Cтек технологий, используемых для разработки:</h3>
        <li><i className="material-icons">flash_on</i>TypeScript</li>
        <li><i className="material-icons">flash_on</i>React, Redux, Redux-saga, React-router</li>
        <li><i className="material-icons">flash_on</i>CSS-библиотека Materialize</li>
      </ul>
      <p>
        Использован <a href="https://openweathermap.org/api">OpenWeather API</a>
      </p>
      <ul>
        <h3>
          На странице вы можете:
        </h3>
        <li><i className="material-icons">flash_on</i>Узнать текущую погоду</li>
        <li><i className="material-icons">flash_on</i>Посмотреть почасовой прогноз на 2 дня</li>
        <li><i className="material-icons">flash_on</i>Посмотреть посуточный прогнеоз на неделю</li>
        <li><i className="material-icons">flash_on</i>Сравнить погоду между 2 и более локациями во вкладке "Weather Comparator"</li>
      </ul>
    </section>
  )
}

export default Home