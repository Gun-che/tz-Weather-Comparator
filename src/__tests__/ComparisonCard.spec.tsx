import React from 'react'
import { shallow } from 'enzyme'
import { ComparisonCard } from '../components/ComparisonCard'
import { weatherDataMock } from '../types/mock/responseMock'

describe('News component', () => {
  const props = {
    data: [weatherDataMock, weatherDataMock]
  }
  describe('News component render', () => {
    const comparisonCard = shallow(<ComparisonCard {...props} />)

    it('renders properly', () => {
      expect(comparisonCard).toMatchSnapshot()
    })

    it('render <img>', () => {
      expect(comparisonCard.find('img')).toHaveLength(1)
    })

    it('render <p>', () => {
      expect(comparisonCard.find('p')).toHaveLength(2)
    })
  })
})