import React from 'react';

import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/screens/Profile.style';
import FlexCard from '../components/flex-card';

export default function HomeScreen() {
  return (
    <View style={styles.cardContainer}>
    <View style={styles.cardContent}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/download.jpeg')}
          style={styles.cardImage}
          crossOrigin='anonymous'
          resizeMode='contain'
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>Hyundai Elantra</Text>
        <Text style={styles.cardText}>$180/day</Text>
      </View>
    </View>
  </View>
  );
}
