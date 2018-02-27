import React from 'react'
import { shallow } from 'enzyme'

import 'configs/tests'

import { Home } from './Home'

describe('>>>S C R E E N --- Test Home', () => {
  it('+++ Render Loading ', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('Loading').length).toEqual(1)
  })
})
