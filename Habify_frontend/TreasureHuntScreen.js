import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const TreasureHuntScreen = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [treasureLocation, setTreasureLocation] = useState(null);

  useEffect(() => {
    // Get user's current location
    getLocationAsync();
  }, []);

  useEffect(() => {
    // Set treasure location 5 km away from the current location
    if (currentLocation) {
      setTreasureLocation(calculateNewCoordinate(currentLocation, 2));
    }
  }, [currentLocation]);

  const getLocationAsync = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Error', 'Permission to access location was denied.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setCurrentLocation({ latitude, longitude });
    } catch (error) {
      Alert.alert('Error', 'Failed to get current location.');
      console.error(error);
    }
  };

  const calculateNewCoordinate = (startCoordinate, distanceInKm) => {
    const oneDegreeOfLatitudeInKm = 111.32;
    const latitudeDelta = distanceInKm / oneDegreeOfLatitudeInKm;
    const longitudeDelta = distanceInKm / (oneDegreeOfLatitudeInKm * Math.cos(startCoordinate.latitude));

    return {
      latitude: startCoordinate.latitude + latitudeDelta,
      longitude: startCoordinate.longitude + longitudeDelta,
    };
  };

  const handleTreasureFound = () => {
    if (!currentLocation || !treasureLocation) {
      Alert.alert('Error', 'Current or treasure location not available.');
      return;
    }

    // Check if user is near the treasure (you can define a proximity threshold)
    const proximityThreshold = 0.005; // Adjust as needed
    const isNearby =
      Math.abs(currentLocation.latitude - treasureLocation.latitude) < proximityThreshold &&
      Math.abs(currentLocation.longitude - treasureLocation.longitude) < proximityThreshold;

    if (isNearby) {
      // Implement logic for collaborative points here
      Alert.alert('Congratulations!', 'You found the treasure!');
    } else {
      Alert.alert('Oops!', 'You are not close enough to the treasure.');
    }
  };

  return (
    <View style={styles.container}>
      {currentLocation && treasureLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Show user's current location */}
          <Marker
            coordinate={currentLocation}
            title="You are here"
            description="Your current location"
            pinColor="blue" // Set the marker color to blue
            draggable={true} // Allow the user to drag the marker
            onPress={() => console.log("Current location marker pressed!")}
          />

          {/* Show treasure location */}
          <Marker coordinate={treasureLocation} title="Treasure" />
        </MapView>
      )}

      <TouchableOpacity style={styles.button} onPress={handleTreasureFound}>
        <Text style={styles.buttonText}>Found the Treasure!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TreasureHuntScreen;
