import React from 'react'
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
        lat: '13',
        lng: '108',
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
    this.setState(() => {
      return {
        showDetailWindow: false,
        activeMarker: null,
      }
    })
  }

  render() {
    const { activeMarker, showDetailWindow, initialCenter } = this.state
    const { zoomLevel, markerLocation } = this.props
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
              <div>Loading....</div>
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
}

WorldMap.defaultProps = {
  zoomLevel: 2,
  markerLocation: null,
}

const wrapper = GoogleApiWrapper({
  apiKey: MAP_API_KEY,
})(WorldMap)

export default wrapper
