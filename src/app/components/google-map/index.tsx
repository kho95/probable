import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.5023831,
      lng: 126.760824
    },
    zoom: 16
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBY_wwUER12xGShJHgqGtNYtHaJAPefHR0' }}
          defaultCenter={SimpleMap.defaultProps.center}
          defaultZoom={SimpleMap.defaultProps.zoom}
        >
          <AnyReactComponent
            lat={37.5023831}
            lng={126.760824}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;