import React from 'react'
import { shallow } from 'enzyme'
import { Home } from '../pages/HomePage'

describe('home component', () => {
  describe('home component render', () => {
    const home = shallow(<Home />)

    it('renders properly', () => {
      expect(home).toMatchSnapshot()
    })

    it('render <h2>', () => {
      expect(home.find('h2')).toHaveLength(1)
    })

    it('renders inner <p>', () => {
      expect(home
        .find('h2')
        .first()
        .text()).toEqual('Weather Comparator')
    })

    it('render <h3>', () => {
      expect(home.find('h3')).toHaveLength(2)
    })

    it('renders inner <h2>', () => {
      expect(home
        .find('h3')
        .first()
        .text()).toEqual('Cтек технологий, используемых для разработки:')
    })
  })
})