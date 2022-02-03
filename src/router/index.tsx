import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ListUsers} from '@domain/list-users';
import {Detail} from '@domain/list-users/detail';
import {Create} from '@domain/list-users/create';

const {Navigator, Screen} = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="ListUsers"
        screenOptions={{headerShown: false}}>
        <Screen name="ListUsers" component={ListUsers} />
        <Screen name="UserDetail" component={Detail} />
        <Screen name="UserCreate" component={Create} />
      </Navigator>
    </NavigationContainer>
  );
}
