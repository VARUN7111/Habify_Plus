// MeditationScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Vibration } from 'react-native';

const MeditationScreen = ({ navigation }) => {
  const [breathingPhase, setBreathingPhase] = useState('Inhale');
  const [timer, setTimer] = useState(5);
  const [isMeditating, setIsMeditating] = useState(false);
  const [breathingImage, setBreathingImage] = useState(require('./images/breathing_nose.png'));
  const [timerIntervalId, setTimerIntervalId] = useState(null);

  const switchBreathingPhase = () => {
    if (breathingPhase === 'Inhale') {
      setBreathingPhase('Exhale');
    } else {
      setBreathingPhase('Inhale');
    }
  };

  useEffect(() => {
    if (isMeditating) {
      // Start the timer immediately
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            switchBreathingPhase();
            Vibration.vibrate(200); // Vibrate for 200 milliseconds on phase switch
            return 5; // Reset timer to 5 seconds
          }
          return prevTimer - 1;
        });
      }, 1000); // Set interval to 1000 milliseconds (1 second)

      // Store the interval ID to clear it later
      setTimerIntervalId(interval);
    } else {
      // Clear the interval when meditation is stopped
      clearInterval(timerIntervalId);
      setTimerIntervalId(null);
      setTimer(5); // Reset timer when meditation is stopped
    }

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerIntervalId);
  }, [isMeditating]);

  const startMeditation = () => {
    setIsMeditating(true);
  };

  const stopMeditation = () => {
    setIsMeditating(false);
  };

  return (
    <View style={styles.container}>
      <Image source={breathingImage} style={styles.breathingIcon} />
      <Text style={styles.phaseText}>{breathingPhase}</Text>
      <Text style={styles.timerText}>{timer}s</Text>
      {!isMeditating ? (
        <TouchableOpacity style={styles.startButton} onPress={startMeditation}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.stopButton} onPress={stopMeditation}>
          <Text style={styles.stopButtonText}>Stop</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  breathingIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  phaseText: {
    fontSize: 24,
    marginBottom: 10,
  },
  timerText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
  },
  stopButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  stopButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default MeditationScreen;
    