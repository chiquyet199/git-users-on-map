import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { MAP_API_KEY } from 'configs/common'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const style = {
  width: '100%',
  height: '100%',
}

export class WorldMap extends React.Component {
  constructor(props) {
    super(props)
    this.onMapClicked = this.onMapClicked.bind(this)
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.state = {
      showDetailWindow: false,
      initialCenter: {
        lat: 10.7553411,
        lng: 106.4150376,
      },
    }
  }

  onMarkerClick(props, marker) {
    this.setState(() => {
      return {
        activeMarker: marker,
        showDetailWindow: true,
      }
    })
  }

  onMapClicked() {
    if (this.state.showDetailWindow) {
      this.setState(() => {
        return {
          showDetailWindow: false,
          activeMarker: null,
        }
      })
    }
  }

  render() {
    const { activeMarker, showDetailWindow, initialCenter } = this.state
    const { zoomLevel, markerLocation, gitUsers, totalUsers } = this.props
    let center = markerLocation || initialCenter
    return (
      <div className="map-container">
        {markerLocation ? (
          <Map
            center={center}
            style={style}
            onClick={this.onMapClicked}
            google={this.props.google}
            zoom={zoomLevel}
          >
            <Marker position={markerLocation} onClick={this.onMarkerClick} name={'Current location'} />
            <InfoWindow marker={activeMarker} visible={showDetailWindow} onClose={this.onInfoWindowClose}>
              <div>
                <div className="info">Number of Github users: {totalUsers}</div>
                {gitUsers.map(user => {
                  return <img key={user.avatar_url} src={user.avatar_url} />
                })}
              </div>
            </InfoWindow>
          </Map>
        ) : (
          <Map onClick={this.onMapClicked} google={this.props.google} zoom={zoomLevel} />
        )}
      </div>
    )
  }
}

WorldMap.propTypes = {
  zoomLevel: PropTypes.number,
  markerLocation: PropTypes.object,
  totalUsers: PropTypes.number,
}

WorldMap.defaultProps = {
  zoomLevel: 3,
  totalUsers: 0,
  markerLocation: null,
}

const mapStateToProps = ({ selectedCountry }) => {
  return {
    markerLocation: selectedCountry.location,
    gitUsers: selectedCountry.users.data,
    totalUsers: selectedCountry.users.total,
  }
}

const wrapper = GoogleApiWrapper({
  apiKey: MAP_API_KEY,
})(WorldMap)

export default connect(mapStateToProps)(wrapper)
