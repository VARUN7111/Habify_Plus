// BubbleMeditationGame.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Bubble from './Bubble';

const BubbleMeditationGame = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Initialize bubbles
    const initialBubbles = Array.from({ length: 10 }, (_, index) => createRandomBubble(index));
    setBubbles(initialBubbles);

    // Set up interval to add new bubbles periodically
    const intervalId = setInterval(() => {
      setBubbles(prevBubbles => [...prevBubbles, createRandomBubble(prevBubbles.length)]);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const createRandomBubble = id => ({
    id,
    position: {
      x: Math.random() * 300,
      y: Math.random() * 500,
    },
    size: Math.random() * 50 + 30,
    soundFile: 'bubble_pop.mp3', // Adjust sound file path
  });

  const handleBubblePop = bubbleId => {
    setBubbles(prevBubbles => prevBubbles.filter(bubble => bubble.id !== bubbleId));
  };

  return (
    <View style={styles.container}>
      {bubbles.map(bubble => (
        <Bubble
          key={bubble.id}
          onPress={() => handleBubblePop(bubble.id)}
          position={bubble.position}
          size={bubble.size}
          soundFile={bubble.soundFile}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default BubbleMeditationGame;
