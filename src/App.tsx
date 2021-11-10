import React from 'react';
import {SafeAreaView} from 'react-native';

import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './custom-theme.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Search, Profile, Manga} from './screens';
import {BottomTabBar, HomeStack} from 'nav';
import {Provider} from 'react-redux';
import {store} from './store';

const BottomNav = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
            <NavigationContainer>
              <BottomNav.Navigator
                screenOptions={{headerShown: false}}
                tabBar={props => <BottomTabBar {...props} />}>
                <BottomNav.Screen name="HomeStack" component={HomeStack} />
                <BottomNav.Screen name="Search" component={Search} />
                <BottomNav.Screen name="Manga" component={Manga} />
                <BottomNav.Screen name="Profile" component={Profile} />
              </BottomNav.Navigator>
            </NavigationContainer>
          </ApplicationProvider>
        </Provider>
      </SafeAreaView>
    </>
  );
};
export default App;
