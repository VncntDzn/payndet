import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, Layout, Text, Icon} from '@ui-kitten/components';
import axios from 'axios';
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import YouTube from 'react-native-youtube';
import HeaderCarousel from './HeaderCarousel';
const Home = ({navigation}: any) => {
  const [result, setResult] = useState<any>();
  const handleNavigation = () => {
    navigation.navigate('AnimeList');
  };
  const retrieveData = async () => {
    try {
      const res = await axios.get(
        'https://private-anon-60b425931f-kitsu.apiary-proxy.com/api/edge/trending/anime?page[limit]=5&page[offset]=0',
      );
      setResult(res.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const viewSingleAnime = item => {
    navigation.navigate('AnimeDetails', {
      item,
    });
    console.log(item.attributes.titles.en_jp);
  };
  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <Layout style={{flex: 1}}>
      <ScrollView>
        <HeaderCarousel data={result} />

        <View style={styles.headerContainer}>
          <Button
            appearance="ghost"
            size="large"
            accessoryLeft={<Icon name="film-outline" />}
            style={{alignSelf: 'flex-start'}}>
            Upcoming
          </Button>
          <Button
            appearance="ghost"
            status="warning"
            onPress={handleNavigation}>
            See All
          </Button>
        </View>

        <FlatList
          horizontal={true}
          data={result}
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
      </ScrollView>
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
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});
export default Home;
