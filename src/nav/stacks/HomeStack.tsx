import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {KitsuAnimeDetails, KitsuAnimeAll} from 'screens/home/components';
import Home from 'screens/home';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="KitsuAnimeDetails" component={KitsuAnimeDetails} />
      <Stack.Screen name="KitsuAnimeAll" component={KitsuAnimeAll} />
    </Stack.Navigator>
  );
};
export default HomeStack;
