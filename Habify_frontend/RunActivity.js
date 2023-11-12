import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

const RunActivity = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [totalDistance] = useState(5); // 5 km task
  const [distance, setDistance] = useState(0);
  const [remainingDistance, setRemainingDistance] = useState(totalDistance);
  const [coordinates, setCoordinates] = useState([]);
  const [locationSubscription, setLocationSubscription] = useState(null);

  const startRun = async () => {
    setIsRunning(true);

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let previousPosition = null;

        const subscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 10000,
            distanceInterval: 10,
          },
          position => {
            if (previousPosition) {
              const newDistance = Location.distance(
                previousPosition.coords,
                position.coords
              );
              setDistance(prevDistance => prevDistance + newDistance);
              const newRemainingDistance = Math.max(0, totalDistance - distance);
              setRemainingDistance(newRemainingDistance);
            }
            previousPosition = position;
            setCoordinates(prevCoordinates => [...prevCoordinates, position.coords]);
          }
        );

        setLocationSubscription(subscription);
      } else {
        setIsRunning(false);
      }
    } catch (error) {
      console.error('Error getting location permission:', error);
      setIsRunning(false);
    }
  };

  const stopRun = () => {
    if (locationSubscription) {
      locationSubscription.remove();
    }
    setIsRunning(false);

    if (remainingDistance <= 0) {
      giveRewards();
    } else {
      Alert.alert('Run Incomplete', 'You did not finish the task.');
    }
  };

  const giveRewards = () => {
    Alert.alert('Run Completed!', 'You earned 5 points!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.appTitle}>ActiveLife+</Text>
      <Text style={styles.motivationalQuote}>
        "The only bad workout is the one that didn't happen."
      </Text>
      <Text style={styles.title}>Run Activity</Text>
      <Text style={styles.info}>Task: {totalDistance} km</Text>
      <Text style={styles.info}>Remaining: {remainingDistance.toFixed(2)} km</Text>
      <Button
        title={isRunning ? 'Running...' : 'Start Run'}
        onPress={startRun}
        disabled={isRunning}
        color="#4CAF50" // Green color
      />
      <Button
        title="Stop Run"
        onPress={stopRun}
        disabled={!isRunning}
        color="#FF4500" // Red color
      />
      <Text style={styles.distance}>Distance: {distance.toFixed(2)} km</Text>
      {coordinates.length > 0 && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: coordinates[0].latitude,
            longitude: coordinates[0].longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Polyline coordinates={coordinates} strokeWidth={4} />
        </MapView>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2196F3', // Blue color
  },
  motivationalQuote: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#696969', // Dim gray color
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  info: {
    marginBottom: 5,
    color: '#333', // Dark gray color
  },
  distance: {
    marginTop: 10,
  },
  map: {
    height: 200,
    marginVertical: 10,
  },
});

export default RunActivity;
