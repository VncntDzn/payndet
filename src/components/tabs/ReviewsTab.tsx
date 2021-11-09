import React, {useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {FETCH_REVIEWS} from 'store/slices/kitsu/thunks';
import {REVIEWS_DATA} from 'store/slices/kitsu/fetchReviews';

const ReviewsTab = ({items}: any) => {
  const reviewsData: any = useAppSelector(REVIEWS_DATA);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FETCH_REVIEWS({id: items.id}));
  }, []);
  return (
    <ScrollView>
      <Layout style={{flex: 1, padding: 10}}>
        {reviewsData.map((data: any, index: number) => (
          <Text key={index}>
            <Text status="warning">Anonymous {index}: </Text>
            {data?.attributes.content}
          </Text>
        ))}
      </Layout>
    </ScrollView>
  );
};
export default ReviewsTab;
