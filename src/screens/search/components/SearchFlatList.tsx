import React from 'react';
import {Text} from '@ui-kitten/components';
import {KITSU_DATA} from 'store/slices/kitsu/fetchCollection';
import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {useAppSelector} from 'store/hooks';

const SearchFlatList = ({navigation}: any) => {
  const data: any = useAppSelector(KITSU_DATA);
  const viewSingleAnime = (item: []) => {
    navigation.navigate('KitsuAnimeDetails', {
      item,
    });
  };

  return (
    <>
      <FlatList
        data={data.data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => viewSingleAnime(item)}
            style={styles.container}
            key={index}>
            <Image
              resizeMode="stretch"
              source={{
                uri: item.attributes?.posterImage?.original,
              }}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text
                status="primary"
                category="h6"
                style={{textAlign: 'center'}}>
                {item.attributes?.titles.en_jp}
              </Text>
              <Text
                status="warning"
                category="p1"
                style={{textAlign: 'center'}}>
                See more
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  textContainer: {
    flexGrow: 1,
  },
  image: {
    height: 90,
    width: 90,
  },
});
export default SearchFlatList;
