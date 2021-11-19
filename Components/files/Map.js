import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';

const initialState = { latitude: null, longitude: null }
const Map = (props) => {
  const [state, setState ] = useState(initialState);
  const { latitude, longitude } = state;
  const { container, map } = styles;
  const getUserLocation = async () => {
    try {
        const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync()
        setState(prevState => ({
            ...prevState,
            latitude,
            longitude
        }));
    }catch(e) {
        console.error("error getUserLocation", e);
    }
}
useEffect(() => {
    getUserLocation();
}, []);
if (!latitude || !longitude) {
  return (
      <View style={container}>
          <ActivityIndicator size="large" />
      </View>
  )
}
  return (
    <View style={container}>
      <MapView style={map} showsUserLocation followsUserLocation 
            region = {{
                latitude,
                longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.121
            }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;