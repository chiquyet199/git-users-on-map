import React from 'react'

import { GET_ASYNC_SUCCESS } from 'actions/action'
import reducer from '../reducer'

let state = {
  data: [],
}

describe('>>>R E D U C E R --- Test reducers', () => {
  
  it('+++ reducer for GET_ASYNC_ACTION', () => {
    const apiData = [
      {
        _id: 123,
        source: 'source',
      },
    ]
    const expectedData = [
      {
        _id: 123,
        source: 'source',
      },
    ]
    state = reducer(state, { type: GET_ASYNC_SUCCESS, payload: apiData })
    expect(state.data).toEqual(expectedData)
  })
})
