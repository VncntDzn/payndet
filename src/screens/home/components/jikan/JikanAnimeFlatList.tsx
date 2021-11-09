import React from 'react';
import {Text, Button, Icon} from '@ui-kitten/components';
import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {AnimeListProps} from '../types';

const JikanAnimeFlatList = ({navigation, data, title}: AnimeListProps) => {
  const handleNavigation = () => {
    navigation.navigate('JikanAnimeAll', {
      data
    });
  };

  const viewSingleAnime = (item: []) => {
    navigation.navigate('JikanAnimeDetails', {
      item,
    });
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <Button
          appearance="ghost"
          size="large"
          accessoryLeft={<Icon name="film-outline" />}
          style={{alignSelf: 'flex-start'}}>
          {title}
        </Button>
        <Button appearance="ghost" status="warning" onPress={handleNavigation}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal={true}
        data={data.top}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.imageParent}
            key={index}
            onPress={() => viewSingleAnime(item)}>
            <Image
              resizeMode="stretch"
              source={{
                uri: item.image_url,
              }}
              style={styles.image}
            />
            <Text style={{textAlign: 'center', marginTop: 9}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 10,
  },
  imageParent: {
    marginHorizontal: 10,
    width: 150,
    height: '100%',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});
export default JikanAnimeFlatList;
