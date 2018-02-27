import Api from 'services/api'

export const GET_ASYNC_SUCCESS = 'GET_ASYNC_SUCCESS'

export { getAsync }

function getAsync() {
  return dispatch => {
    return Api.get(url)
      .then(res => {
        dispatch({ type: GET_ASYNC_SUCCESS, payload: res })
      })
      .catch(() => {})
  }
}