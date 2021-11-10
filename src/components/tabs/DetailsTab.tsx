import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native';

const DetailsTab = ({items}: any) => {
  return (
    <ScrollView>
      <Layout style={{flex: 1, padding: 10}}>
        <Text status="warning" category="h6">
          Titles:{' '}
          <Text>
            {items.titles.en_jp}
            {', '}
            {items.titles.ja_jp}
          </Text>
        </Text>
        <Text status="warning" category="h6">
          Type: <Text>{items.showType}</Text>
        </Text>
        <Text status="warning" category="h6">
          Age Rating: <Text>{items.ageRating}</Text>
        </Text>
        <Text status="warning" category="h6">
          No. of Episodes: <Text>{items.episodeCount}</Text>
        </Text>
        <Text status="warning" category="h6">
          Created Date: <Text>{items.createdAt}</Text>
        </Text>
        <Text status="warning" category="h6">
          Updated Date: <Text>{items.updatedAt}</Text>
        </Text>
        <Text style={{textAlign: 'justify'}}>
          <Text status="warning" category="h6">
            Synopsis:
          </Text>{' '}
          {items.synopsis}
        </Text>
      </Layout>
    </ScrollView>
  );
};

export default DetailsTab;
