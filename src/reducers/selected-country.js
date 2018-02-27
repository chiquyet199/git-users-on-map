import {
  SELECTED_COUNTRY_CHANGED,
  FOUND_COUNTRY_LOCATION,
  GET_GIT_USERS_SUCCESS,
} from 'actions/selected-country'

const initialState = {
  name: '',
  location: null,
  users: { total: 0, data: [] },
}

let actionHandlers = {}

actionHandlers[SELECTED_COUNTRY_CHANGED] = (state, country) => {
  return { ...state, name: country }
}

actionHandlers[FOUND_COUNTRY_LOCATION] = (state, location) => {
  return { ...state, location }
}

actionHandlers[GET_GIT_USERS_SUCCESS] = (state, users) => {
  return { ...state, users }
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
