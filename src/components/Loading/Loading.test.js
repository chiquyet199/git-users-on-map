import React from 'react'
import { shallow } from 'enzyme'

import 'configs/tests'

import Loading from './Loading'

describe('>>>C O M P O N E N T --- Test PostDetail', () => {
  it('+++ it should render the Loading component correct', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.contains(<div className="loading" />)).toEqual(true)
  })
})
