import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Text} from '@ui-kitten/components';
import {BackIcon} from '../../../../components/index';
import {Image, Linking, View} from 'react-native';
const JikanAnimeDetails = ({navigation, route}) => {
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
          source={{
            uri: route.params.item.image_url,
          }}
          style={{
            height: 200,
            width: '50%',
            position: 'absolute',
            borderRadius: 20,
            top: 130,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 100,
            marginHorizontal: 10,
          }}>
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

JikanAnimeDetails.propTypes = {};

export default JikanAnimeDetails;
