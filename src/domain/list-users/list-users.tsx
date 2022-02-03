import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

/* Components */
import {EmptyList} from '@domain/list-users/components/empty-list';

/* Model */
import {User} from '@models/user';

import * as S from './styles';

export function ListUsers() {
  const navigation = useNavigation();

  const items: User[] = [
    /* {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''},
    {code: '', birthdate: '', id: '', name: ''}, */
  ];

  const renderItem = () => {
    const route = 'UserDetail' as never; /* Issue React Navigation */
    return <S.UserCard onPress={() => navigation.navigate(route)} />;
  };

  function onPressFAB() {
    const route = 'UserCreate' as never;
    navigation.navigate(route);
  }

  return (
    <S.Wrapper>
      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyList />}
      />

      <S.FabButton onPress={onPressFAB} />
    </S.Wrapper>
  );
}
