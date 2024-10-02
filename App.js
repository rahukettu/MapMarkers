import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null); // Current location
  const [markers, setMarkers] = useState([]); // Markers list
  const [showText, setShowText] = useState(true); //Control text visibility

  useEffect(() => {
    let isMounted = true; // Keep track of mounting status

    
    // Hide "Hello, Map!" text after 3 seconds
    const timer = setTimeout(() => {
      if (isMounted) {
        setShowText(false); 
      }
    }, 3000);

    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied.');
          return;
        }

        let userLocation = await Location.getCurrentPositionAsync({});
        if (isMounted) {
          setLocation({
            latitude: userLocation.coords.latitude,
            longitude: userLocation.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();

    // Cleanup function when the component unmounts
    return () => {
      isMounted = false;
      clearTimeout(timer); // Clearing to prevent memory leaks
    };
  }, []);

  // Handle adding markers on long press
  const handleLongPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setMarkers((currentMarkers) => [
      ...currentMarkers,
      {
        coordinate,
        key: Math.random().toString(), // Unique keys for each marker
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {showText && <Text style={styles.text}>Hello, Map!</Text>} 
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={location}
          showsUserLocation={true} // Shows user's location on the map
          onLongPress={handleLongPress} // Handle long press to add marker
        >
          {markers.map((marker) => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
            />
          ))}
        </MapView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    top: 50, 
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 10,
    borderRadius: 5,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});