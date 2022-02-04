import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ListUsers} from '@domain/list-users';
import {Create} from '@domain/list-users/create';
import {TakePhoto} from '@domain/list-users/create/take-photo';

const {Navigator, Screen} = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="ListUsers"
        screenOptions={{headerShown: false}}>
        <Screen name="ListUsers" component={ListUsers} />
        <Screen name="UserCreate" component={Create} />
        <Screen name="TakePhoto" component={TakePhoto} />
      </Navigator>
    </NavigationContainer>
  );
}
