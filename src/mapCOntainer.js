import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    pos : {lat: 37.759703, lng: -122.428093}
    }
  }
  componentWillMount () {
    window.navigator.geolocation.getCurrentPosition((position) => {
     let  position1 = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      this.setState({
        pos:position1
      })
    })
  }

  render() {
    console.log('this.props.google', 
    );
    const containerStyle = {
      position: 'relative',
      width: '100%',
      height: '100%'
    };

    console.log('pos', this.state.pos)
    const {pos} = this.state;
    return (
      <Map
        google={this.props.google}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        className={'map'}
        zoom={14}
        initialCenter={pos}
      >
        <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={pos} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDaLTtUkCeREq_7sN3EH-RaC_R98joVmvU'
})(MapContainer);
