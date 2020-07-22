import React from 'react'
import { shallow, mount } from 'enzyme'
import { CityInput, ICityInputProps } from '../components/CityInput'

describe('CityInput component', () => {
  const props: ICityInputProps = {
    index: 1,
    onChange: jest.fn(),
    item: ['q', 1],
    onClose: jest.fn(),
  }
  describe('CityInput component render', () => {
    const CityInputRender = shallow(<CityInput {...props} />)

    it('renders properly', () => {
      expect(CityInputRender).toMatchSnapshot()
    })

    it('render <button>', () => {
      expect(CityInputRender.find('button')).toHaveLength(1)
    })

    it('render <input>', () => {
      expect(CityInputRender.find('input')).toHaveLength(1)
    })

    it('render <label>', () => {
      expect(CityInputRender.find('label')).toHaveLength(1)
    })
  })
})