export const SERVER_ERROR = 'SERVER_ERROR'

export { handleServerError }

function handleServerError(err) {
  alert('Server Error. Check your internet or reload page')
  return dispatch => {
    dispatch({ type: SERVER_ERROR, payload: err })
  }
}
