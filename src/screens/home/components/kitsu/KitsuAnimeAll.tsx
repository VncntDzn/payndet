import React from 'react';
import {Text, Layout} from '@ui-kitten/components';
import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {AnimeListProps} from '../types';
import {BackIcon} from 'components';

const KitsuAnimeAll = ({navigation, route, title}: AnimeListProps) => {
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
        data={route.params.data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.imageParent}
            key={index}
            onPress={() => viewSingleAnime(item)}>
            <Image
              resizeMode="stretch"
              source={{
                uri: item.attributes?.posterImage?.original,
              }}
              style={styles.image}
            />
            <Text style={{textAlign: 'center', marginTop: 9}}>
              {item.attributes?.titles.en_jp}
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
    margin: 10,
    width: 150,
    height: '100%',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});
export default KitsuAnimeAll;
