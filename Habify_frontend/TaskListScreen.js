// TaskListScreen.js
import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';

const TaskListScreen = ({ navigation }) => {
    const handleTaskPress = (taskType) => {
      if (taskType === 'Meditation') {
        navigation.navigate('MeditationScreen'); // Navigate to MeditationScreen
      } else if (taskType === 'MusicKeyboard StressMgmt') {
        navigation.navigate('MusicKeyboardScreen'); // Navigate to MusicKeyboardScreen
      }else if (taskType === 'BubbleGame StressMgmt') {
        navigation.navigate('BubbleGame'); // Navigate to MusicKeyboardScreen
      }else if (taskType === 'TreasureHunt') {
        navigation.navigate('Treasure'); // Navigate to MusicKeyboardScreen
      }else {
        navigation.navigate('RunActivity', { taskType });
      }
    };

  // Define a mapping of task types to image paths
  const taskImages = {
    Running: require('./images/running.png'),
    Cycling: require('./images/cycling.png'),
    Walking: require('./images/walking.png'),
    Meditation: require('./images/meditation.png'),
  };

  const renderTaskItem = (taskType) => (
    <TouchableHighlight
      style={styles.taskContainer}
      onPress={() => handleTaskPress(taskType)}
      underlayColor="#5cb3ff" // Highlight color when pressed
      key={taskType} // Ensure a unique key for each task
    >
      <>
        <Text style={styles.task}>{taskType}</Text>
        {/* Use Image component for custom images */}
        <Image source={taskImages[taskType]} style={styles.taskIcon} />
      </>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      {renderTaskItem('Running')}
      {renderTaskItem('Cycling')}
      {renderTaskItem('Walking')}
      {renderTaskItem('Meditation')}
      {renderTaskItem('TreasureHunt')}
      {renderTaskItem('MusicKeyboard StressMgmt')}
      {renderTaskItem('BubbleGame StressMgmt')}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007bff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  task: {
    fontSize: 18,
    color: '#fff',
  },
  taskIcon: {
    width: 30,
    height: 30,
  },
});

export default TaskListScreen;
