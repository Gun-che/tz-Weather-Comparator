import React from 'react'
import { shallow } from 'enzyme'
import { CurrentWeather } from '../pages/Weather/components/CurrentWeather'
import { weatherDataMock } from '../types/mock/responseMock'

describe('currentWeather component', () => {
  const props = {
    data: weatherDataMock
  }
  describe('currentWeather component render', () => {
    const currentWeather = shallow(<CurrentWeather {...props} />)

    it('renders properly', () => {
      expect(currentWeather).toMatchSnapshot()
    })

    it('render <img>', () => {
      expect(currentWeather.find('img')).toHaveLength(1)
    })

    it('render <p>', () => {
      expect(currentWeather.find('p')).toHaveLength(4)
    })

    it('renders inner <h2>', () => {
      expect(currentWeather
        .find('h2')
        .first()
        .text()).toEqual(`Погода в населенном пункте ${props.data.name}`)
    })

    it('renders inner <p>', () => {
      expect(currentWeather
        .find('p')
        .first()
        .text()).toEqual(`Ветер: ${props.data.wind.speed}м/с`)
    })
  })
})