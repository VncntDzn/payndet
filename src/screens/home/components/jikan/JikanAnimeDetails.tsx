import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {BackIcon} from 'components';
import {Image, Linking, StyleSheet, View} from 'react-native';
import {AnimeListProps} from '../types';

const JikanAnimeDetails = ({navigation, route}: AnimeListProps) => {
  return (
    <>
      <BackIcon navigation={navigation} />
      <Layout style={{flex: 1, position: 'relative'}}>
        <Image
          resizeMode="stretch"
          source={{
            uri: route.params.item.image_url,
          }}
          blurRadius={5}
          style={{height: 250, width: '100%'}}
        />
        <Image
          resizeMode="stretch"
          style={styles.coverImage}
          source={{
            uri: route.params.item.image_url,
          }}
        />
        <View style={styles.textContainer}>
          <Text status="primary" category="h5">
            {route.params.item.title}
          </Text>
          <Text status="warning" category="p1">
            Rank {route.params.item.rank}
          </Text>
          <Text status="warning" category="p1">
            {route.params.item.type}
          </Text>
          {route.params.item.score !== 0 && (
            <Text status="warning" category="p1">
              Rating {route.params.item.score} / 10
            </Text>
          )}

          <Text
            status="warning"
            category="p1"
            onPress={() => {
              Linking.openURL(route.params.item.url);
            }}>
            More details
          </Text>
        </View>
      </Layout>
    </>
  );
};
const styles = StyleSheet.create({
  coverImage: {
    height: 200,
    width: '50%',
    position: 'absolute',
    borderRadius: 20,
    top: 130,
    alignSelf: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100,
    marginHorizontal: 10,
  },
});
export default JikanAnimeDetails;
