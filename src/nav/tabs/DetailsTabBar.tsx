import React from 'react';
import {Tab, TabBar} from '@ui-kitten/components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailsTab from '../../components/tabs/DetailsTab';

const TopTabNav = createMaterialTopTabNavigator();
const TopTabBar = ({navigation, state}) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title="DETAILS" />
    <Tab title="REVIEWS" />
  </TabBar>
);
const DetailsTabBar = props => {
  return (
    <TopTabNav.Navigator tabBar={props => <TopTabBar {...props} />}>
      <TopTabNav.Screen name="DETAILS" component={DetailsTab} />
      <TopTabNav.Screen name="REVIEWS" component={DetailsTab} />
    </TopTabNav.Navigator>
  );
};

export default DetailsTabBar;
