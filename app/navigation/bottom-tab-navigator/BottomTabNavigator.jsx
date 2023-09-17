import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeIcon from '../../../assets/images/home-icon';
import HomeStack from '../stack-navigators/HomeStack';
import * as Theme from '../../constants/theme'
import searchIcon from '../../../assets/images/search-icon';
import SearchStack from '../stack-navigators/SearchStack';
import ProfileStack from '../stack-navigators/ProfileStack';
import profileIcon from '../../../assets/images/profile-icon';
import { StyleSheet } from 'react-native';
import HomeScreen from '../../screens/Home';
const Tab = createBottomTabNavigator();

export default TabNavigator = () => {

  getTabScreenOptions = (label, Component) => {
    return {
      tabBarLabel: label,
      tabBarIcon: ({focused, color, size}) => <Component isActive={focused} />,
    };
  };

  return (
    <Tab.Navigator
    screenOptions={({route, navigation}) => ({
      tabBarActiveTintColor: Theme.COLOR_BLACK,
      tabBarInactiveTintColor: Theme.TERTIARY_COLOR,
      headerShown: false,
      tabBarLabelStyle: {
        fontSize: 10,
        fontFamily: navigation?.isFocused()
          ? Theme.FONT_FAMILY_BOLD
          : Theme.FONT_FAMILY_MEDIUM
      },
      // headerShown: false,
    })}>
      <Tab.Screen name="HomeStack" component={HomeStack} 
       options={getTabScreenOptions('Home', HomeIcon)}
      
      />
      <Tab.Screen name="SearchStack" component={SearchStack} 
       options={getTabScreenOptions('Search', searchIcon)}
      
      />
      <Tab.Screen name="ProfileStack" component={ProfileStack} 
       options={getTabScreenOptions('Profile', profileIcon)}
      
      />
    </Tab.Navigator>
  );
};