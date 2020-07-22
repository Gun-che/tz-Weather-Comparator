import React from 'react'
import { shallow } from 'enzyme'
import { NotFound } from '../pages/NotFound'

describe('loading components', () => {
  describe('loading thin component render', () => {
    const notFound = shallow(<NotFound />)

    it('renders properly', () => {
      expect(notFound).toMatchSnapshot()
    })

    it('render <div/>', () => {
      expect(notFound.find('div')).toHaveLength(1)
    })

    it('renders inner <div/>', () => {
      expect(notFound
        .find('div')
        .first()
        .text()).toEqual('404not found')
    })
  })
})