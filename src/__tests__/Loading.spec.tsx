import React from 'react'
import { shallow } from 'enzyme'
import { LoadingThin, LoadingFullScreen } from '../components/Loading'

describe('loading components', () => {
  describe('loading thin component render', () => {
    const loadingThin = shallow(<LoadingThin />)

    it('renders properly', () => {
      expect(loadingThin).toMatchSnapshot()
    })

    it('render div#loading', () => {
      expect(loadingThin.find('div#loading')).toHaveLength(1)
    })

    it('renders inner <div id="loading">', () => {
      expect(loadingThin
        .find('div#loading')
        .first()
        .text()).toEqual('loading')
    })
  })

  describe('loading full screen component render', () => {
    const loadingFullScreen = shallow(<LoadingFullScreen />)

    it('renders properly', () => {
      expect(loadingFullScreen).toMatchSnapshot()
    })

    it('render div#loading', () => {
      expect(loadingFullScreen.find('div#loading')).toHaveLength(1)
    })

    it('renders inner <div id="loading">', () => {
      expect(loadingFullScreen
        .find('div#loading')
        .first()
        .text()).toEqual('loading')
    })
  })
})