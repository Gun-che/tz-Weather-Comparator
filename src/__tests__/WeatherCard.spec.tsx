import React from 'react'
import { shallow } from 'enzyme'
import { WeatherCard } from '../components/WeatherCard'
import { weatherDataMock } from '../types/mock/responseMock'

describe('weatherCard component', () => {
  const props = {
    data: weatherDataMock,
  }
  describe('weatherCard component render', () => {
    const weatherCard = shallow(<WeatherCard {...props} />)

    it('renders properly', () => {
      expect(weatherCard).toMatchSnapshot()
    })

    it('render <img>', () => {
      expect(weatherCard.find('img')).toHaveLength(1)
    })

    it('render <p>', () => {
      expect(weatherCard.find('p')).toHaveLength(7)
    })
  })
})