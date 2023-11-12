import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const HomeScreen = () => {
  // Dummy data for the bar chart
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [3, 5, 2, 8, 6, 7, 4],
      },
    ],
  };

  // Dummy badge paths
  const badgePaths = [
    require('./images/badge1.png'),

    // Add more badge paths as needed
  ];

  const screenWidth = Dimensions.get('window').width;
  const badgeSize = screenWidth / 2; // Adjust the divisor for your preferred badge size

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {/* Bar Chart */}
      <BarChart
        data={chartData}
        width={screenWidth - 40} // Adjusted width to fit the screen with 20px margin on each side
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

      {/* Badges */}
      <View style={styles.badgesContainer}>
        {badgePaths.map((path, index) => (
          <Image key={index} source={path} style={{ ...styles.badge, width: badgeSize, height: badgeSize }} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chart: {
    marginVertical: 20,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  badge: {
    margin: 5,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
