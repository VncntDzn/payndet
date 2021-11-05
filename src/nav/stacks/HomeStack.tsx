import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home';
import AnimeList from '../../components/shared/AnimeList';
import AnimeDetails from '../../screens/home/components/AnimeDetails';

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
export default HomeStack;