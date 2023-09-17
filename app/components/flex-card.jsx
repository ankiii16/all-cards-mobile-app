import React from 'react';
import Styles from '../styles/components/flex-card.style';
import {View, Image, Text} from 'react-native';

export default ({showImage = false, imageTitleText = '', variant}) => {
const variantCalculated = variant === 'small'? 200 : 100;
  return (
    <View style={Styles.container(variantCalculated)}>
      <View style={Styles.detailContainer}>
        {showImage && (
          <Image
            resizeMode="contain"
            style={Styles.postImage}
            source={require('../../jp_backchod.jpeg')}
          />
        )}
        <Text style={Styles.postTitleText}>{imageTitleText}</Text>
      </View>
    </View>
  );
};
