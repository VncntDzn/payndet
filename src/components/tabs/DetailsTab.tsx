import React from 'react';
import {Layout, Text} from '@ui-kitten/components';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {RootState} from 'src/store/index';
import {ScrollView} from 'react-native';
const DetailsTab = ({navigation, route}) => {
  const anime = useAppSelector(
    (state: RootState) => state.fetch_anime.selectedAnime.attributes,
  );
  return (
    <ScrollView>
      <Layout style={{flex: 1, padding: 10}}>
        <Text status="warning" category="h6">
          Titles:{' '}
          <Text>
            {anime.titles.en_jp}
            {', '}
            {anime.titles.ja_jp}
          </Text>
        </Text>
        <Text
          status="warning"
          category="h6"
          onPress={() => console.log(anime.showType)}>
          Type: <Text>{anime.showType}</Text>
        </Text>
        <Text status="warning" category="h6">
          Age Rating: <Text>{anime.ageRating}</Text>
        </Text>
        <Text status="warning" category="h6">
          No. of Episodes: <Text>{anime.episodeCount}</Text>
        </Text>
        <Text status="warning" category="h6">
          Created Date: <Text>{anime.createdAt}</Text>
        </Text>
        <Text status="warning" category="h6">
          Updated Date: <Text>{anime.updatedAt}</Text>
        </Text>
        <Text style={{textAlign: 'justify'}}>
          <Text status="warning" category="h6">
            Synopsis:
          </Text>{' '}
          {anime.synopsis}
        </Text>
      </Layout>
    </ScrollView>
  );
};

DetailsTab.propTypes = {};

export default DetailsTab;
