import React from 'react';
import {SafeAreaView} from 'react-native';

import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './custom-theme.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/home/Home';
import HomeStack from './screens/home/HomeStack';
import BottomTabBar from './nav/BottomTabBar';

const {Navigator, Screen} = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <SafeAreaView style={{flex: 1}}>
        <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
          <NavigationContainer>
            <Navigator
              screenOptions={{headerShown: false}}
              tabBar={props => <BottomTabBar {...props} />}>
              <Screen name="Home" component={HomeStack} />
              <Screen name="Search" component={Home} />
              <Screen name="Manga" component={Home} />
              <Screen name="Credits" component={Home} />
            </Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </SafeAreaView>
    </>
  );
};
export default App;
