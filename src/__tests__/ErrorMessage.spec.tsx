import React from 'react'
import { shallow } from 'enzyme'
import { ErrorMessage } from '../components/ErrorMessage'

describe('errorMessage component', () => {
  const props = {
    message: 'error'
  }
  describe('errorMessage component render with Error', () => {
    const errorMessage = shallow(<ErrorMessage {...props} />)

    it('renders properly', () => {
      expect(errorMessage).toMatchSnapshot()
    })

    it('render <h2>', () => {
      expect(errorMessage.find('h2')).toHaveLength(1)
    })

    it('renders inner <h2>', () => {
      expect(errorMessage
        .find('h2')
        .first()
        .text()).toEqual(props.message)
    })
  })
  describe('errorMessage component render without Error', () => {
    const errorMessage = shallow(<ErrorMessage message='' />)

    it('renders properly', () => {
      expect(errorMessage).toMatchSnapshot()
    })

    it('render <h2>', () => {
      expect(errorMessage.find('h2')).toHaveLength(0)
    })
  })
})