import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {View, TouchableOpacity, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Text} from '@ui-kitten/components';
const HeaderCarousel = ({data}) => {
  const [activeIndex, setActiveIndex] = useState<any>();
  return (
    <Carousel
      layout="default"
      data={data}
      sliderWidth={390}
      itemWidth={390}
      loop={true}
      autoplay={true}
      hasParallaxImages={true}
      style={{position: 'relative'}}
      pagingEnabled={true}
      onSnapToItem={index => setActiveIndex(index)}
      renderItem={({item, index}: any) => (
        <TouchableOpacity key={index}>
          <Image
            resizeMode="stretch"
            source={{
              uri: item.attributes?.posterImage?.original,
            }}
            style={{height: 330}}
          />

          <View style={{position: 'absolute', bottom: 10, left: 15}}>
            <Text status="control" category="h4">
              {item?.attributes?.titles.en_jp}
            </Text>
            <Text status="danger" category="h6">
              See more
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

HeaderCarousel.propTypes = {};

export default HeaderCarousel;
