// App.js
import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import KidHomeScreen from './KidHomeScreen';
import ParentHomeScreen from './ParentHomeScreen';
import NavigationComponent from './Navigation';
import RunActivity from './RunActivity';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen'; // Import the new ProfileScreen component
import TaskListScreen from './TaskListScreen';
import MeditationScreen from './MeditationScreen';
import ContactUsScreen from './ContactUsScreen';
import RewardsPage from './RewardsPage';
import TreasureHuntScreen from './TreasureHuntScreen';
import MusicKeyboard from './MusicKeyboard';
import BubbleMeditationGame from './BubbleMeditationGame';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [userType, setUserType] = useState(null);

  return (
    <NavigationContainer>
      {userType ? (
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={({ navigation }) => <NavigationComponent navigation={navigation} setUserType={setUserType} />}
        >
          {userType === 'kid' ? (
            <>
              <Drawer.Screen name="Home" component={KidHomeScreen} />
              <Drawer.Screen name="Tasks" component={TaskListScreen} />
              <Drawer.Screen name="Profile" component={ProfileScreen} />
              <Drawer.Screen name="RunActivity" component={RunActivity} />
              <Drawer.Screen name="MeditationScreen" component={MeditationScreen} />
              <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
              <Drawer.Screen name="Rewards" component={RewardsPage} />
              <Drawer.Screen name="Login" component={LoginScreen} />
              <Drawer.Screen name="Treasure" component={TreasureHuntScreen} />
              <Drawer.Screen name="MusicKeyboardScreen" component={MusicKeyboard} />
              <Drawer.Screen name="BubbleGame" component={BubbleMeditationGame} />
              {/* Add other screens for kid as needed */}
            </>
          ) : (
            <>
              <Drawer.Screen name="Home" component={ParentHomeScreen} />
              <Drawer.Screen name="Profile" component={ProfileScreen} />
              {/* Add other screens for parent as needed */}
            </>
          )}
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setUserType={setUserType} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default () => (
  <ImageBackground source={require('./images/logo.jpeg')} style={styles.backgroundImage}>
    <App />
  </ImageBackground>
);

