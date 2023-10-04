import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/Profile';
import PersonalSettingsScreen from '../../screens/PersonalSettings';
import * as Routes from '../../constants/routes'
import RecentOrdersScreen from '../../screens/RecentOrders';
import FavouritesScreen from '../../screens/Favourites';
import MyListingsScreen from '../../screens/MyListings';
import FormsScreen from '../../screens/Forms';
import FaqsScreen from '../../screens/Faqs';
import ContactUsScreen from '../../screens/ContactUs';

export default function ProfileStack(){
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={Routes.PERSONAL_SETTINGS} component={PersonalSettingsScreen} />
      <Stack.Screen name={Routes.RECENT_ORDERS} component={RecentOrdersScreen} />
      <Stack.Screen name={Routes.FAVOURITES} component={FavouritesScreen} />
      <Stack.Screen name={Routes.MY_LISTINGS} component={MyListingsScreen} />
      <Stack.Screen name={Routes.FORMS} component={FormsScreen} />
      <Stack.Screen name={Routes.FAQS} component={FaqsScreen} />
      <Stack.Screen name={Routes.CONTACT_US} component={ContactUsScreen} />
    </Stack.Navigator>
  );
}
