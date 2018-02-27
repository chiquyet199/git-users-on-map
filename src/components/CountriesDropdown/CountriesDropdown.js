import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import utils from 'services/utils'
import countries from 'configs/countries'
import { selectedCountryChanged, findCountryLocation, getGitUsersByCountry } from 'actions/selected-country'

import './CountriesDropdown.scss'

export class CountriesDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const countryName = e.target.value
    if (countryName) {
      this.props.findCountryLocation(countryName)
      this.props.getGitUsersByCountry(countryName)
      this.props.selectedCountryChanged(countryName)
    }
  }

  render() {
    return (
      <select onChange={this.onChange}>
        <option value={null}> Please select country</option>
        {countries.map(country => {
          return (
            <option key={country.code} value={utils.trimAllSpace(country.name)}>
              {country.name}
            </option>
          )
        })}
      </select>
    )
  }
}

CountriesDropdown.propTypes = {
  findCountryLocation: PropTypes.func,
  selectedCountryChanged: PropTypes.func,
  getGitUsersByCountry: PropTypes.func,
}

CountriesDropdown.defaultProps = {
  findCountryLocation: () => {},
  selectedCountryChanged: () => {},
  getGitUsersByCountry: () => {},
}

const mapDispatchToProps = dispatch => {
  return {
    findCountryLocation: country => dispatch(findCountryLocation(country)),
    selectedCountryChanged: country => dispatch(selectedCountryChanged(country)),
    getGitUsersByCountry: country => dispatch(getGitUsersByCountry(country)),
  }
}
export default connect(null, mapDispatchToProps)(CountriesDropdown)
