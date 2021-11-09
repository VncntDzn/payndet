import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home';
import AnimeList from '../../components/shared/AnimeList';
import KitsuAnimeDetails from '../../screens/home/components/kitsu/KitsuAnimeDetails';
import JikanAnimeDetails from '../../screens/home/components/jikan/JikanAnimeDetails';

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
