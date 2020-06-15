import React from 'react'
import { Map, GoogleApiWrapper, IProvidedProps } from 'google-maps-react'

interface MapContainerProps {
  google: IProvidedProps['google']
}

export class MapContainer extends React.Component<MapContainerProps> {
  render() {
    return <Map google={this.props.google}></Map>
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE',
})(MapContainer)
