import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as R } from 'react-router-dom'
import { Weather } from '../pages/Weather'

describe('weatherPage component', () => {
  const props = {
    getWeather: jest.fn(),
    daily: [],
    hourly: [],
    data: [],
    message: '',
    code: 1,
    isFetching: false,
  }
  describe('weatherPage component render', () => {
    const weatherPage = mount(<R><Weather {...props} /></R>)

    it('renders properly', () => {
      expect(weatherPage).toMatchSnapshot()
    })

    it('render <Route>', () => {
      expect(weatherPage.find('Route')).toHaveLength(3)
    })

    it('render <Link>', () => {
      expect(weatherPage.find('Link')).toHaveLength(3)
    })

    it('render <form>', () => {
      expect(weatherPage.find('form')).toHaveLength(1)
    })
  })
})