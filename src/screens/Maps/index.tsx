import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
interface MapsProps {}

const Maps = (props: MapsProps) => {
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
