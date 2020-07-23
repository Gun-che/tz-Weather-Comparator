import React from 'react'
import { shallow } from 'enzyme'
import { DailyForecast } from '../pages/Weather/components/DailyForecast'
import { dailyWeatherDataMock } from '../types/mock/responseMock'

describe('DailyForecast component', () => {
  const props = {
    data: [dailyWeatherDataMock, dailyWeatherDataMock],
    name: 'moscow'
  }
  describe('dailyForecast component render', () => {
    const dailyForecast = shallow(<DailyForecast {...props} />)

    it('render forecast item', () => {
      expect(dailyForecast.find('div.card-content')).toHaveLength(props.data.length)
    })

    it('render <h2>', () => {
      expect(dailyForecast.find('h2')).toHaveLength(1)
    })

    it('renders inner <h2>', () => {
      expect(dailyForecast
        .find('h2')
        .first()
        .text()).toEqual(`Прогноз на неделю в городе ${props.name}`)
    })
  })
})