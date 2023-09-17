/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import NavigationContainerAllCars from './app/navigation/NavigationContainer';


export default function App(){
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{
      flex:1
    }}>
      <StatusBar translucent backgroundColor="transparent" />
     <NavigationContainerAllCars />
    </SafeAreaView>
  );
}