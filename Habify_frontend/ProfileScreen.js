// ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  // Sample user data (replace this with actual user data from your application state)
  const [userData, setUserData] = useState({
    name: 'John Doe',
    username: 'john_doe',
    password: '********',
    age: 13,
    dob: '01/01/2010',
    gender: 'Male',
    bmi: 22.5,
    // Add more user information as needed
  });

  const handleEditPress = () => {
    if (isEditing) {
      // Save the edited data
      setUserData((prevUserData) => ({ ...prevUserData, ...editedData }));
    }

    setIsEditing(!isEditing);
  };

  const renderUserInfo = (label, value) => (
    <View style={styles.userInfoContainer}>
      <Text style={styles.label}>{label}:</Text>
      {isEditing ? (
        <TextInput
          style={styles.editInput}
          value={editedData[label.toLowerCase()] !== undefined ? editedData[label.toLowerCase()] : String(value)}
          onChangeText={(text) => setEditedData((prevData) => ({ ...prevData, [label.toLowerCase()]: text }))}
        />
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('./images/profile.png')} style={styles.profileImage} />

      {renderUserInfo('Name', userData.name)}
      {renderUserInfo('Username', userData.username)}
      {renderUserInfo('Password', '********')}
      {renderUserInfo('Age', userData.age)}
      {renderUserInfo('Date of Birth', userData.dob)}
      {renderUserInfo('Gender', userData.gender)}
      {renderUserInfo('BMI', userData.bmi)}

      <TouchableOpacity onPress={handleEditPress} style={styles.editButton}>
        <Text style={styles.editButtonText}>{isEditing ? 'Save Changes' : 'Edit Profile'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
  editInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#2196F3', // Blue color
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff', // White color
    textAlign: 'center',
  },
});

export default ProfileScreen;
