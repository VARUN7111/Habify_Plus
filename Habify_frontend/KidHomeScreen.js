import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const KidHomeScreen = ({ navigation }) => {
  // Dummy data for the bar chart
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [3, 5, 2, 8, 6, 7, 4],
      },
    ],
  };

  const screenWidth = Dimensions.get('window').width;

  // Dummy task data
  const tasks = [
    { name: 'Run 5km', completed: true },
    { name: 'Meditate for 10mins', completed: false },
    // Add more tasks as needed
  ];

  // Motivational quotes
  const motivationalQuotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    // Add more quotes as needed
  ];

  // State to hold the selected motivational quote
  const [motivationalQuote, setMotivationalQuote] = useState('');

  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setMotivationalQuote(motivationalQuotes[randomIndex]);
  };

  // Call the function to get a random quote when the component mounts
  useEffect(() => {
    getRandomQuote();

    // Set up an interval to change the quote every 30 seconds
    const intervalId = setInterval(() => {
      getRandomQuote();
    }, 30000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handleTaskPress = () => {
    // Navigate to the 'Tasks' screen or any other desired screen
    navigation.navigate('Tasks');
  };

  // Calculate total activities and activities done this week
  const totalActivities = tasks.length;
  const activitiesDoneThisWeek = tasks.filter((task) => task.completed).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello John</Text>
      </View>

      {/* Motivational Quote */}
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{motivationalQuote}</Text>
      </View>

      {/* Tasks */}
      <View style={styles.tasksContainer}>
        <Text style={styles.subtitle}>Your pending tasks:</Text>
        {tasks.map((task, index) => (
          <TouchableOpacity
            key={index}
            onPress={handleTaskPress}
            style={styles.taskRow}
            activeOpacity={0.7}
          >
            <Text style={styles.taskName}>{task.name}</Text>
            <Text style={task.completed ? styles.completedTask : styles.pendingTask}>
              {task.completed ? 'Completed' : 'Pending'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.subtitle}>Your progress:</Text>
        <BarChart
          data={chartData}
          width={screenWidth - 40}
          height={200}
          yAxisLabel=""
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>

      {/* Total Activities and Activities Done This Week */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Total Activities Completed</Text>
          <Text style={styles.summaryValue}>{totalActivities}</Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Activities Completed This Week</Text>
          <Text style={styles.summaryValue}>{activitiesDoneThisWeek}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F77B5', // Blue background color
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
  quoteContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#000',
  },
  tasksContainer: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  taskName: {
    fontSize: 16,
    color: '#000',
  },
  completedTask: {
    fontSize: 16,
    color: 'green',
  },
  pendingTask: {
    fontSize: 16,
    color: 'red',
  },
  progressContainer: {
    marginBottom: 20,
  },
  chart: {
    marginVertical: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
  },
  summaryValue: {
    fontSize: 18,
    marginTop: 5,
    color: '#3498db',
  },
});

export default KidHomeScreen;
