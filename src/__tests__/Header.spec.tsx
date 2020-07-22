import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../components/Header'

describe('Header component', () => {
  describe('Header component render', () => {
    const header = shallow(<Header />)

    it('renders properly', () => {
      expect(header).toMatchSnapshot()
    })

    it('render <Link>', () => {
      expect(header.find('Link')).toHaveLength(6)
    })

    it('renders inner <i>', () => {
      expect(header
        .find('i')
        .first()
        .text()).toEqual('ac_unit')
    })
  })
})