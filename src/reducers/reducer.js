import { GET_ASYNC_SUCCESS } from 'actions/action'

const initialState = {
  data: [],
}

let actionHandlers = {}


actionHandlers[GET_ASYNC_SUCCESS] = (state, data) => {
  return {
    ...state,
    data
  }
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
