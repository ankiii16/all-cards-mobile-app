import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Routes from '../constants/routes';
import Styles from '../styles/screens/Profile.style'
const profileScreenOptions = [
  {
    title: 'Personal Settings',
    route: Routes.PERSONAL_SETTINGS,
    id: 1,
  },
  {
    title: 'Recent Orders',
    route: Routes.RECENT_ORDERS,
    id: 2,
  },
  {
    title: 'Favourites',
    route: Routes.FAVOURITES,
    id: 3,
  },
  {
    title: 'My Listing',
    route: Routes.MY_LISTINGS,
    id: 4,
  },
  {
    title: 'Forms',
    route: Routes.FORMS,
    id: 5,
  },
  {
    title: "FAQ's",
    route: Routes.FAQS,
    id: 6,
  },
];

export default ProfileScreen = ({navigation}) => {
  const navigateToRoute = item => navigation.navigate(item);

  return (
    <ScrollView style={Styles.container}>
      <List navigateToRoute={navigateToRoute} />
    </ScrollView>
  );
};

const List = ({navigateToRoute}) => {
  return profileScreenOptions.map((data, index) => {
    return (
      <SmallListCard
        item={data}
        key={index}
        navigateToRoute={navigateToRoute}
      />
    );
  });
};

const SmallListCard = ({item, navigateToRoute}) => {
  return (
    <TouchableOpacity
      style={Styles.card}
      onPress={() => navigateToRoute(item.route)}>
      <Text style={Styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );
};
