import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ListUsers} from '@domain/list-users';

const {Navigator, Screen} = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="ListUsers"
        screenOptions={{headerShown: false}}>
        <Screen name="ListUsers" component={ListUsers} />
      </Navigator>
    </NavigationContainer>
  );
}
