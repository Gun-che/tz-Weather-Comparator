import React from 'react'
import { shallow } from 'enzyme'
import { WeatherContainer } from '../containers/WeatherContainer'
import { weatherDataMock, hourlyWeatherDataMock, dailyWeatherDataMock } from '../types/mock/responseMock'

describe('Weather container', () => {
  const props = {
    getWeather: jest.fn(),
    data: [],
    isFetching: false,
    message: '1',
    code: 1,
    daily: [],
    hourly: [],
  }

  describe('Weather container init', () => {
    const WeatherContainerRender = shallow(<WeatherContainer {...props} />)

    it('renders properly', () => {
      expect(WeatherContainerRender).toMatchSnapshot()
    })
  })

  describe('Weather container render <Weather>', () => {
    const nextProps = {
      ...props,
      data: [weatherDataMock]
    }

    const WeatherContainerRender = shallow(<WeatherContainer {...nextProps} />)

    it('renders properly', () => {
      expect(WeatherContainerRender).toMatchSnapshot()
    })
  })


  describe('Weather container render <Weather>', () => {
    const nextProps = {
      ...props,
      hourly: [hourlyWeatherDataMock, hourlyWeatherDataMock]
    }

    const WeatherContainerRender = shallow(<WeatherContainer {...nextProps} />)

    it('renders properly', () => {
      expect(WeatherContainerRender).toMatchSnapshot()
    })
  })


  describe('Weather container render <Weather>', () => {
    const nextProps = {
      ...props,
      daily: [dailyWeatherDataMock, dailyWeatherDataMock]
    }

    const WeatherContainerRender = shallow(<WeatherContainer {...nextProps} />)

    it('renders properly', () => {
      expect(WeatherContainerRender).toMatchSnapshot()
    })
  })


  describe('Weather container with error', () => {
    const nextProps = {
      ...props,
      msg: 'Something going wrong',
    }

    const WeatherContainerRender = shallow(<WeatherContainer {...nextProps} />)

    it('renders properly', () => {
      expect(WeatherContainerRender).toMatchSnapshot()
    })
  })


  describe('Weather container loading', () => {
    const nextProps = {
      ...props,
      isFetching: true,
    }

    const WeatherContainerRender = shallow(<WeatherContainer {...nextProps} />)
    it('renders properly', () => {
      expect(WeatherContainerRender).toMatchSnapshot()
    })
  })
})


