import React from 'react';
import {Linking} from 'react-native';
import {Layout, Text, Icon, Button} from '@ui-kitten/components';

const Profile = () => {
  return (
    <Layout style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text status="basic" category="h4">
        Vincent's Profile
      </Text>
      <Button
        size="giant"
        appearance="ghost"
        onPress={() => Linking.openURL('https://github.com/VncntDzn')}
        accessoryLeft={<Icon name="github" />}>
        Github
      </Button>
      <Button
        size="giant"
        appearance="ghost"
        onPress={() => Linking.openURL('https://vpdizon.vercel.app/')}
        accessoryLeft={<Icon name="globe" />}>
        Portfolio
      </Button>
      <Button
        size="giant"
        appearance="ghost"
        onPress={() =>
          Linking.openURL(
            'https://www.linkedin.com/in/vincent-dizon-34831817b/',
          )
        }
        accessoryLeft={<Icon name="linkedin" />}>
        LinkedIn
      </Button>
    </Layout>
  );
};

Profile.propTypes = {};

export default Profile;
