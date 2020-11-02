import React from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '30vh'
};

function Map(coordinates: any) {
  const center = coordinates.coordinates.coordinates;
  const zoom = coordinates.coordinates.zoom;

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
        <Marker position={center}>
          <div style={{ backgroundColor: "red", padding: 10 }}>
            <span>SF</span>
          </div>
        </Marker>
        <></>
      </GoogleMap>
    </LoadScript>
  )
}


export default React.memo(Map)