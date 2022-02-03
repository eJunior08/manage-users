import React from 'react';

import {useNavigation} from '@react-navigation/native';

import * as S from './styles';

export function Create() {
  const navigation = useNavigation();

  function onPressProfile() {
    const route = 'TakePhoto' as never;
    navigation.navigate(route);
  }

  return (
    <S.Wrapper>
      <S.ProfileContainer onPress={onPressProfile} />

      <S.Input placeholder="Insira o código" />
      <S.Input placeholder="Insira o nome" />
      <S.Input placeholder="Insira a data de nascimento" />
    </S.Wrapper>
  );
}
