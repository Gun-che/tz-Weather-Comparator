import React from 'react'
import { shallow } from 'enzyme'
import { WeatherComparator } from '../pages/WeatherComparator'
import { weatherDataMock } from '../types/mock/responseMock'

describe('WeatherComparatorPage component', () => {
  const props = {
    getWeather: jest.fn(),
    data: [],
    message: '',
    code: 1,
    isFetching: false,
  }
  describe('WeatherComparatorPage render without data', () => {
    const WeatherComparatorPage = shallow(<WeatherComparator {...props} />)

    it('renders properly', () => {
      expect(WeatherComparatorPage).toMatchSnapshot()
    })

    it('render form', () => {
      expect(WeatherComparatorPage.find('form')).toHaveLength(1)
    })

    it('render <h2>', () => {
      expect(WeatherComparatorPage.find('h2')).toHaveLength(1)
    })

    it('renders inner <h2>', () => {
      expect(WeatherComparatorPage
        .find('h2')
        .first()
        .text()).toEqual(`Введите названия городов, погоду в которых вы хотите сравнить`)
    })
  })


  describe('WeatherComparatorPage render', () => {
    const nextProps = {
      ...props,
      data: [weatherDataMock, weatherDataMock]
    }

    const WeatherComparatorPage = shallow(<WeatherComparator {...nextProps} />)

    it('renders properly', () => {
      expect(WeatherComparatorPage).toMatchSnapshot()
    })

    it('render compare item', () => {
      expect(WeatherComparatorPage.find('WeatherCard')).toHaveLength(nextProps.data.length)
    })
  })
})