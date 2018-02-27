import React from 'react'
import { WorldMap, CountriesDropdown } from 'components'

import './Home.scss'

export class Home extends React.Component {
  render() {
    return (
      <div>
        <WorldMap />
        <div className="countries-dropdown">
          <CountriesDropdown />
        </div>
      </div>
    )
  }
}

export default Home
