import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home';
import AnimeList from '../../components/shared/AnimeList';
import AnimeDetails from '../../screens/home/components/AnimeDetails';
import JikanAnimeDetails from '../../screens/home/components/jikan/JikanAnimeDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnimeList" component={AnimeList} />
      <Stack.Screen name="AnimeDetails" component={AnimeDetails} />
      <Stack.Screen name="JikanAnimeDetails" component={JikanAnimeDetails} />
    </Stack.Navigator>
  );
};
export default HomeStack;
