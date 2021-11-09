import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  KitsuAnimeDetails,
  JikanAnimeDetails,
  JikanAnimeAll,
  KitsuAnimeAll,
} from 'screens/home/components';
import Home from 'screens/home';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="KitsuAnimeDetails" component={KitsuAnimeDetails} />
      <Stack.Screen name="JikanAnimeDetails" component={JikanAnimeDetails} />
      <Stack.Screen name="KitsuAnimeAll" component={KitsuAnimeAll} />
      <Stack.Screen name="JikanAnimeAll" component={JikanAnimeAll} />
    </Stack.Navigator>
  );
};
export default HomeStack;
