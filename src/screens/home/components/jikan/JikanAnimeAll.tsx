import React from 'react';
import {Text, Layout} from '@ui-kitten/components';
import {FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {AnimeListProps} from '../types';
import {BackIcon} from 'components';

const JikanAnimeAll = ({navigation, route, title}: AnimeListProps) => {
  const viewSingleAnime = (item: []) => {
    navigation.navigate('JikanAnimeDetails', {
      item,
    });
  };

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <BackIcon navigation={navigation} />
      <FlatList
        numColumns={2}
        data={route.params.data.top}
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
    </Layout>
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
export default JikanAnimeAll;
