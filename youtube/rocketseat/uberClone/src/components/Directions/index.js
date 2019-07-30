import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
      origin={origin}
    onReady={onReady}
    apikey="AIzaSyAikRbNNgyP2gQyAS-aC6nRKgIqrs5tUgI"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
