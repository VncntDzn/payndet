import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AnimeList} from 'components';
import {KitsuAnimeDetails, JikanAnimeDetails} from 'screens/home/components';
import Home from 'screens/home';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnimeList" component={AnimeList} />
      <Stack.Screen name="KitsuAnimeDetails" component={KitsuAnimeDetails} />
      <Stack.Screen name="JikanAnimeDetails" component={JikanAnimeDetails} />
    </Stack.Navigator>
  );
};
export default HomeStack;
