// Navigation.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navigation = ({ navigation, setUserType }) => {
  const handleNavigateToTasks = () => {
    navigation.navigate('Tasks');
  };

  const handleLogout = () => {
    setUserType(null);
    navigation.navigate('Login');
  };
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateToTasks}>
        <Text style={styles.option}>Tasks</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.option}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
        <Text style={styles.option}>Rewards</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
        {/* Updated to navigate to 'ContactUs' screen */}
        <Text style={styles.option}>Contact Us/Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.option}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingTop: 50,
  },
  option: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },
});

export default Navigation;
