import React from 'react';
import PropTypes from 'prop-types';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

const BottomTabBar = ({navigation, state}) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={<Icon name="home" />} />
      <BottomNavigationTab icon={<Icon name="search" />} />
      <BottomNavigationTab icon={<Icon name="book" />} />
      <BottomNavigationTab icon={<Icon name="person" />} />
    </BottomNavigation>
  );
};

BottomTabBar.propTypes = {};

export default BottomTabBar;
