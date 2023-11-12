import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import base64 from 'base64-js';

const MusicKeyboard = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [timer, setTimer] = useState(null);

  const playNote = async (frequency) => {
    const soundObject = new Audio.Sound();

    try {
      await soundObject.loadAsync({
        uri: `data:audio/wav;base64,${await generateBase64Wav(frequency)}`,
      });
      await soundObject.playAsync();
    } catch (error) {
      console.error('Error loading sound', error);
    }
  };

  const generateBase64Wav = async (frequency) => {
    const durationInSec = 1;
    const sampleRate = 44100;
    const numChannels = 1;
    const numFrames = sampleRate * durationInSec;
    const amplitude = 0.5;

    const buffer = new ArrayBuffer(44 + numFrames * numChannels * 2);
    const view = new DataView(buffer);

    // WAV header
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + numFrames * numChannels * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * 2, true);
    view.setUint16(32, numChannels * 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, numFrames * numChannels * 2, true);

    // PCM audio data
    for (let i = 0; i < numFrames; i++) {
      const value = amplitude * Math.sin((2 * Math.PI * frequency * i) / sampleRate);
      view.setInt16(44 + i * 2, value * 0x7fff, true);
    }

    // Use base64-js library for encoding
    const bytes = new Uint8Array(buffer);
    const base64Encoded = base64.fromByteArray(bytes);

    return base64Encoded;
  };

  const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  const notes = [
    { key: 'Sa', frequency: 261.63 },
    { key: 'Re', frequency: 293.66 },
    { key: 'Ga', frequency: 329.63 },
    { key: 'Ma', frequency: 349.23 },
  ];

  const quotes = [
    'Music is the divine way to tell beautiful, poetic things to the heart. - Pablo Casals',
    'Meditation is the tongue of the soul and the language of our spirit. - Jeremy Taylor',
    'Without music, life would be a mistake. - Friedrich Nietzsche',
    'Meditation brings wisdom; lack of mediation leaves ignorance. - Buddha',
  ];

  useEffect(() => {
    const updateQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    };

    // Call the function once when the component mounts
    updateQuote();

    // Start the timer
    const interval = setInterval(updateQuote, 30000);

    // Save the interval ID to clear it later
    setTimer(interval);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.keyboardContainer}>
        {notes.map((note) => (
          <TouchableOpacity
            key={note.key}
            style={styles.key}
            onPress={() => playNote(note.frequency)}
          >
            <Text style={styles.keyText}>{note.key}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.quotesContainer}>
        <Text style={styles.quoteText}>{currentQuote}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  keyboardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  key: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
    marginBottom: 10,
  },
  keyText: {
    color: 'white',
    fontSize: 18,
  },
  quotesContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 20,
  },
  quoteText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default MusicKeyboard;
