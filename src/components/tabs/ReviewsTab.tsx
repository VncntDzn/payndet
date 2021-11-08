import React, {useEffect, useState} from 'react';
import {Layout, Text} from '@ui-kitten/components';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {RootState} from 'src/store/index';
import {ScrollView} from 'react-native';
import axios from 'axios';
const ReviewsTab = ({navigation, route}) => {
  const id = useAppSelector(
    (state: RootState) => state.fetch_anime.selectedAnime.id,
  );

  const [reviews, setReviews] = useState<any>();
  const retrieveReviews = async () => {
    try {
      const res = await axios.get(
        `https://private-anon-d507aa85f8-kitsu.apiary-proxy.com/api/edge/anime/${id}/reviews`,
      );
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    retrieveReviews();
  }, []);
  return (
    <ScrollView>
      <Layout style={{flex: 1, padding: 10}}>
        {reviews?.data.map((data, index) => (
          <Text>
            <Text status="warning">Anonymous {index}: </Text>
            {data?.attributes.content}
          </Text>
        ))}
      </Layout>
    </ScrollView>
  );
};

ReviewsTab.propTypes = {};

export default ReviewsTab;
