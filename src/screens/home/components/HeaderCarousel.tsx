import React, {useEffect} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Text} from '@ui-kitten/components';
import Carousel from 'react-native-snap-carousel';

import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {FETCH_RESOURCE} from '../../../store/slices/anime/fetchResource';
import axios from 'axios';

const HeaderCarousel = ({navigation, data}: any) => {
  const dispatch = useAppDispatch();
  const handleNavigation = (item: any) => {
    navigation.navigate('AnimeDetails', {
      item,
    });
  };

  return (
    <Carousel
      layout="default"
      data={data}
      sliderWidth={390}
      itemWidth={390}
      loop={true}
      autoplay={true}
      hasParallaxImages={true}
      style={{position: 'relative', zIndex: 10, borderWidth: 2}}
      pagingEnabled={true}
      renderItem={({item, index}: any) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            handleNavigation(item);
            dispatch(FETCH_RESOURCE({title: item.attributes.titles.en_jp}));
          }}>
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

export default HeaderCarousel;
