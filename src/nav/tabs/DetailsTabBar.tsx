import React from 'react';
import {Tab, TabBar} from '@ui-kitten/components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailsTab from '../../components/tabs/DetailsTab';

const TopTabNav = createMaterialTopTabNavigator();
const TopTabBar = ({navigation, state}) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title="USERS" />
    <Tab title="ORDERS" />
  </TabBar>
);
const DetailsTabBar = props => {
  return (
    <TopTabNav.Navigator tabBar={props => <TopTabBar {...props} />}>
      <TopTabNav.Screen name="Users" component={DetailsTab} />
      <TopTabNav.Screen name="Orders" component={DetailsTab} />
    </TopTabNav.Navigator>
  );
};

export default DetailsTabBar;
