import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { latestExperimentCardsProps } from './TestUtils'

import SceaHomePageLatestExperimentPanel from '../src/SceaHomePageLatestExperimentPanel'

Enzyme.configure({ adapter: new Adapter() })

describe(`SceaHomePageLatestExperimentContainer`, () => {
  const props = {
    cards: latestExperimentCardsProps
  }

  test(`renders latest experiment cards`, async () => {
    const wrapper = mount(<SceaHomePageLatestExperimentPanel {...props} />)

    expect(wrapper.find(`LatestExperimentPanel`)).toHaveLength(props.cards.length)
    expect(wrapper.find(`small`)).toHaveLength(props.cards.length)
  })
})