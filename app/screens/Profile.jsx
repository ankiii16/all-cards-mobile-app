import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const profileScreenOptions = [
  {
    title: 'Personal Settings',
    route: '',
    id: 1,
  },
  {
    title: 'Recent Orders',
    route: '',
    id: 2,
  },
  {
    title: 'Favourites',
    route: '',
    id: 3,
  },
  {
    title: 'My Listing',
    route: '',
    id: 4,
  },
  {
    title: 'Forms',
    route: '',
    id: 5,
  },
  {
    title: "FAQ's",
    route: '',
    id: 6,
  },
];

export default ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
     <List/>
    </ScrollView>
  );
};

const List = () => {
  return profileScreenOptions.map((data,index)=>{
    return <SmallListCard item={data}/>
  })
};

const SmallListCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  list: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    // borderRadius: 8,
    padding: 16,
    borderColor: 'black',
    borderWidth: 1,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

