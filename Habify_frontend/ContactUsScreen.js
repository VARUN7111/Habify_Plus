// src/ContactUsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ContactUsScreen = () => {
  const [feedback, setFeedback] = useState('');

  const teamEmail = 'habifyplus@example.com'; // Replace with your actual team email address

  const handleFeedbackChange = (text) => {
    setFeedback(text);
  };

  const handleSubmit = () => {
    // Implement your feedback submission logic here
    console.log(`Feedback submitted to ${teamEmail}: ${feedback}`);
    // You can send the feedback to your server or handle it as needed
    // For simplicity, we are just logging it for now
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.infoText}>Your feedback makes us better!</Text>
      <Text style={styles.infoText}>Team Email: {teamEmail}</Text>
      <TextInput
        style={styles.feedbackInput}
        multiline
        placeholder="Type your feedback here..."
        value={feedback}
        onChangeText={handleFeedbackChange}
      />
      <Button title="Submit Feedback" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1F77B5', // Change the background color to blue
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff', // Change text color to white
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#fff', // Change text color to white
  },
  feedbackInput: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    textAlignVertical: 'top',
    backgroundColor: '#fff', // Change the background color to white
  },
});

export default ContactUsScreen;
