/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View } from 'react-native';
import BottomTabNavigator from './bottom-tab-navigator/BottomTabNavigator';
import HomeStack from './stack-navigators/HomeStack';
export default function NavigationContainerAllCars() {
  return (
    <NavigationContainer>
       <BottomTabNavigator/>
    </NavigationContainer>
  );
};

