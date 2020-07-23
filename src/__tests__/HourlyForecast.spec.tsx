import React from 'react'
import { shallow } from 'enzyme'
import { HourlyForecast } from '../pages/Weather/components/HourlyForecast'
import { hourlyWeatherDataMock } from '../types/mock/responseMock'

describe('Hourly Forecast component', () => {
  const props = {
    data: [hourlyWeatherDataMock, hourlyWeatherDataMock],
    name: 'moscow'
  }
  describe('hourlyForecast component render', () => {
    const hourlyForecast = shallow(<HourlyForecast {...props} />)

    it('renders properly', () => {
      expect(hourlyForecast).toMatchSnapshot()
    })

    it('render forecast item', () => {
      expect(hourlyForecast.find('div.sec')).toHaveLength(props.data.length)
    })

    it('render <h2>', () => {
      expect(hourlyForecast.find('h2')).toHaveLength(1)
    })

    it('renders inner <h2>', () => {
      expect(hourlyForecast
        .find('h2')
        .first()
        .text()).toEqual(`Почасовой прогноз на 2 дня в городе ${props.name}`)
    })
  })
})