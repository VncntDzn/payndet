import React from 'react';
import PropTypes from 'prop-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import AnimeList from '../../components/AnimeList';
import AnimeDetails from './AnimeDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnimeList" component={AnimeList} />
      <Stack.Screen name="AnimeDetails" component={AnimeDetails} />
    </Stack.Navigator>
  );
};

HomeStack.propTypes = {};

export default HomeStack;
