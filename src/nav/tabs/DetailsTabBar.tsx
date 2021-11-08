import React from 'react';
import {Tab, TabBar} from '@ui-kitten/components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailsTab from '../../components/tabs/DetailsTab';
import ReviewsTab from '../../components/tabs/ReviewsTab';

const TopTabNav = createMaterialTopTabNavigator();
const TopTabBar = ({navigation, state}) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title="DETAILS" />
    <Tab title="REVIEWS" />
  </TabBar>
);
const DetailsTabBar = ({data}) => {
  return (
    <TopTabNav.Navigator tabBar={props => <TopTabBar {...props} />}>
      <TopTabNav.Screen
        children={() => <DetailsTab items={data.attributes} />}
        name="DETAILS"
      />
      <TopTabNav.Screen
        name="REVIEWS"
        children={() => <ReviewsTab items={data} />}
      />
    </TopTabNav.Navigator>
  );
};

export default DetailsTabBar;
