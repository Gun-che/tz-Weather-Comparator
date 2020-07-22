import React from 'react'
import { shallow } from 'enzyme'
import { WeatherComparatorContainer as WCC } from '../containers/WeatherComparatorContainer'
import { weatherDataMock } from '../types/mock/responseMock'

describe('Weather container', () => {
  const props = {
    getWeather: jest.fn(),
    data: [],
    isFetching: false,
    message: '1',
    code: 1,
  }

  describe('Weather container init', () => {
    const WCCRender = shallow(<WCC {...props} />)

    it('renders properly', () => {
      expect(WCCRender).toMatchSnapshot()
    })
  })

  describe('Weather container render <Weather>', () => {
    const nextProps = {
      ...props,
      data: [weatherDataMock]
    }

    const WCCRender = shallow(<WCC {...nextProps} />)

    it('renders properly', () => {
      expect(WCCRender).toMatchSnapshot()
    })
  })

  describe('Weather container with error', () => {
    const nextProps = {
      ...props,
      msg: 'Something going wrong',
    }

    const WCCRender = shallow(<WCC {...nextProps} />)

    it('renders properly', () => {
      expect(WCCRender).toMatchSnapshot()
    })
  })


  describe('Weather container loading', () => {
    const nextProps = {
      ...props,
      isFetching: true,
    }

    const WCCRender = shallow(<WCC {...nextProps} />)
    it('renders properly', () => {
      expect(WCCRender).toMatchSnapshot()
    })
  })
})


