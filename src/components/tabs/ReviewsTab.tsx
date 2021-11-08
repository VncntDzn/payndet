import React, {useEffect, useState} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native';
import axios from 'axios';
const ReviewsTab = ({items}) => {
  const [reviews, setReviews] = useState<any>();
  const retrieveReviews = async () => {
    try {
      const res = await axios.get(
        `https://private-anon-d507aa85f8-kitsu.apiary-proxy.com/api/edge/anime/${items.id}/reviews`,
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
          <Text key={index}>
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
