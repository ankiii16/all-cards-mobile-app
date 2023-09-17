import React from 'react';

import { View, Text} from 'react-native';
import Styles from '../styles/screens/Profile.style'
import FlexCard from '../components/flex-card';


export default function HomeScreen(){

  return (
    <View style={Styles.container}>
      <FlexCard
      imageTitleText='Ma Ninja Hathori'
      showImage={true}
      variant="small"
      >

      </FlexCard>
        <Text>
            Home Screen
        </Text>
    </View>
  );
}