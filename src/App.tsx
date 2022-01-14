import { GoogleMap, LoadScript, Marker, InfoWindow, Circle } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const positionAkiba = {
  lat: 35.69731,
  lng: 139.7747,
};

const positionIwamotocho = {
  lat: 35.69397,
  lng: 139.7762,
};

const positionShibaura = {
  lat: 35.64333,
  lng: 139.74964,
};

const markerLabelAkiba = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "100",
  text: "5",
}

const markerLabelIwamotocho = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "100",
  text: "12",
};

const markerLabelShibaura = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "100",
  text: "20",
};

const divStyle = {
  background: "white",
  fontSize: 7.5,
};

const circleOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

const MyComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCGElIAsXCbrQtijDL-o6508cB2iFsgI9U">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
        <Marker position={positionAkiba} label={markerLabelAkiba} />
        <Marker position={positionIwamotocho} label={markerLabelIwamotocho} />
        <Marker position={positionShibaura} label={markerLabelShibaura} />
        <InfoWindow position={positionAkiba}>
          <div style={divStyle}>
            <h1>秋葉原オフィス</h1>
          </div>
        </InfoWindow>
        <InfoWindow position={positionIwamotocho}>
          <div style={divStyle}>
            <h1>秋葉原オフィス</h1>
          </div>
        </InfoWindow>
        <InfoWindow position={positionShibaura}>
          <div style={divStyle}>
            <h1>芝浦キャンパス</h1>
          </div>
        </InfoWindow>
        <Circle center={positionAkiba} radius={50} options={circleOptions} />
        <Circle center={positionIwamotocho} radius={50} options={circleOptions} />
        <Circle center={positionShibaura} radius={50} options={circleOptions} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyComponent;