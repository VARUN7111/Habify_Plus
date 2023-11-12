import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation, setUserType }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate username and password, then determine user type
    const userType = username === 'kid' ? 'kid' : username === 'parent' ? 'parent' : 'unknown';

    if (userType !== 'unknown') {
      // Pass the userType directly to setUserType instead of using navigation.setParams
      setUserType(userType);
    } else {
      // Handle invalid login
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
     
      <Image source={require('./images/logo.jpeg')} style={styles.image} />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
