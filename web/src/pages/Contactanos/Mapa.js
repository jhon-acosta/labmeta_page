import React  from 'react';

import L from 'leaflet';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

const places2017 = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

const styles = {
    wrapper: { 
      height: 400, 
      width: '80%', 
      margin: '0 auto', 
      display: 'flex' 
    },
    map: {
      flex: 1
    } 
  };

  const geojsonMarkerOptions2017 = {
    radius: 4,
    fillColor: "#EE4266",
    color: "#000",
    weight: 0,
    opacity: 1,
    fillOpacity: 0.4
  };
  
  function pointToLayer2017(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions2017);
  }
  
  const Mapa = props => {
    return (
      <div style={styles.wrapper}>
        <Map style={styles.map} center={props.center} zoom={props.zoom}>
          <TileLayer url={props.url} />
          <GeoJSON
          data={places2017}
          pointToLayer={pointToLayer2017}
        />
        </Map>
      </div>
    );
  }
  
  Mapa.defaultProps = {
    center: [-0.189441, -78.487211],
    zoom: 55,
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  };
export default Mapa;