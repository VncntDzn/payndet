import React from 'react';
import {Text, Button, Icon} from '@ui-kitten/components';
import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const KitsuAnimeFlatList = ({navigation, data}: any) => {
  const handleNavigation = () => {
    navigation.navigate('AnimeList');
  };

  const viewSingleAnime = (item: any) => {
    navigation.navigate('KitsuAnimeDetails', {
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
          Trending
        </Button>
        <Button appearance="ghost" status="warning" onPress={handleNavigation}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal={true}
        data={data}
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
        keyExtractor={item => item.id}
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
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});
export default KitsuAnimeFlatList;
