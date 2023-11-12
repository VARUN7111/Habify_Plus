// Bubble.js
import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const Bubble = ({ onPress, position, size, soundFile }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const bubbleStyle = {
    transform: [{ scale: animatedValue }],
    width: size,
    height: size,
    borderRadius: size / 2,
    position: 'absolute',
    left: position.x,
    top: position.y,
  };

  const playSound = async () => {
    const soundObject = new Audio.Sound();

    try {
      
      await soundObject.playAsync();
    } catch (error) {
      console.error('Error loading sound', error);
    }
  };

  return (
    <Animated.View style={bubbleStyle}>
      <TouchableOpacity onPress={() => { onPress(); playSound(); }} style={styles.bubble} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    flex: 1,
    backgroundColor: 'blue', // Customize bubble appearance
  },
});

export default Bubble;
