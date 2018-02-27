import React from 'react'

import countries from 'configs/countries'
import utils from 'services/utils'

import './CountriesDropdown.scss'

export class CountriesDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const countryName = e.target.value
    console.log(countryName)
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

CountriesDropdown.propTypes = {}

CountriesDropdown.defaultProps = {}

export default CountriesDropdown
