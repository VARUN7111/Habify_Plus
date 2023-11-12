// src/RewardsPage.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const RewardsPage = ({ navigation }) => {
  const badges = [
    require('./images/badge1.png'),
    // Add more badge images as needed
  ];

  const handleShare = () => {
    // Implement share functionality (e.g., using Share API)
    console.log('Share clicked!');
  };

  const leaderboardData = [
    { id: '1', username: 'JohnDoe', score: 150 },
    { id: '2', username: 'JaneSmith', score: 120 },
    { id: '3', username: 'BobJohnson', score: 100 },
    // Add more dummy data as needed
  ];

  const renderLeaderboardItem = ({ item }) => (
    <View style={styles.leaderboardItem}>
      <Text>{item.username}</Text>
      <Text style={styles.scoreText}>{item.score} points</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rewards</Text>

      {/* Display Badges */}
      <View style={styles.badgesContainer}>
        {badges.map((badge, index) => (
          <Image key={index} source={badge} style={styles.badgeImage} />
        ))}
      </View>

      {/* Leaderboard Section */}
      <Text style={styles.sectionHeader}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.id}
        renderItem={renderLeaderboardItem}
      />

      {/* Share Icons */}
      <Text style={styles.sectionHeader}>Share Your Achievements</Text>
      <View style={styles.shareContainer}>
        <TouchableOpacity onPress={handleShare}>
          <Image source={require('./images/instagram.png')} style={styles.shareIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <Image source={require('./images/facebook.png')} style={styles.shareIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <Image source={require('./images/twitter.png')} style={styles.shareIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  badgeImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  scoreText: {
    fontWeight: 'bold',
  },
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  shareIcon: {
    width: 50,
    height: 50,
  },
});

export default RewardsPage;
