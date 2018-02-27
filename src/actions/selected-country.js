import Api from 'services/api'
import { MAP_API_KEY } from 'configs/common'

export const GET_GIT_USERS_SUCCESS = 'GET_GIT_USERS_SUCCESS'
export const FOUND_COUNTRY_LOCATION = 'FOUND_COUNTRY_LOCATION'
export const SELECTED_COUNTRY_CHANGED = 'SELECTED_COUNTRY_CHANGED'

export { selectedCountryChanged, findCountryLocation, getGitUsersByCountry }

function getGitUsersByCountry(country) {
  return dispatch => {
    const url = `search/users?q=location:${country}&sort=followers`
    Api.get(url)
      .then(res => {
        if (res.data) {
          const payload = {
            total: res.data.total_count,
            data: res.data.items.slice(0, 10),
          }
          dispatch({ type: GET_GIT_USERS_SUCCESS, payload })
        }
      })
      .catch(() => {})
  }
}

function findCountryLocation(countryName) {
  return dispatch => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${countryName}&key=${MAP_API_KEY}`
    Api.get(url)
      .then(response => {
        const country = response.data.results[0]
        if (country) {
          dispatch({ type: FOUND_COUNTRY_LOCATION, payload: country.geometry.location })
        }
      })
      .catch(() => {})
  }
}

function selectedCountryChanged(country) {
  return dispatch => {
    dispatch({
      type: SELECTED_COUNTRY_CHANGED,
      payload: country,
    })
  }
}
