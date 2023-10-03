import React from 'react';

import { View, Text} from 'react-native';
import Styles from '../styles/screens/Search.style'
import SearchComponent from '../styles/components/Search-component';


export default function SearchScreen(){

  return (
    <View style={Styles.container}>
        <SearchComponent />
    </View>
  );
}