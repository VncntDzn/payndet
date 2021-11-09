import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const Profile = props => {
  return (
    <Layout style={{flex:1}}>
      <Text>HI Profile</Text>
    </Layout>
  );
};

Profile.propTypes = {};

export default Profile;
