import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {sliderImage} from '../constants/index.js'

const { width } = Dimensions.get('window');

const ImageSlider = () => {
  return (
    <Carousel
      width={width}
      height={180}
      autoPlay={true}
      data={sliderImage}
      renderItem={({ item }) => (
        <View style={{ flex: 1 }}>
          <Image source={item} style={{ width: '100%', height: '100%' }} />
        </View>
      )}
    />
  );
};

export default ImageSlider;
