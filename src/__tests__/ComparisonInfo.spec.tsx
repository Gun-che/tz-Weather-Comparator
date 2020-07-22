import React from 'react'
import { shallow } from 'enzyme'
import { ComparisonInfo } from '../components/ComparisonInfo'
import { weatherDataMock } from '../types/mock/responseMock'

describe('comparisonInfo component', () => {
  const props = {
    data: [weatherDataMock, weatherDataMock]
  }
  describe('comparisonInfo component render', () => {
    const comparisonInfo = shallow(<ComparisonInfo {...props} />)

    it('renders properly', () => {
      expect(comparisonInfo).toMatchSnapshot()
    })

    it('render <span>', () => {
      expect(comparisonInfo.find('span')).toHaveLength(1)
    })

    it('renders inner <span>', () => {
      expect(comparisonInfo
        .find('span')
        .first()
        .text()).toEqual('Таблица сравнений')
    })
  })
})