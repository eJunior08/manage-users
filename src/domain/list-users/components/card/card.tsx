import React from 'react';
import {User} from '@models/user';

import * as S from './styles';

type Props = {
  user: User;
  onPress: () => void;
};

export function Card({user, ...props}: Props) {
  return (
    <S.Wrapper {...props}>
      <S.ProfileImage />

      <S.Content>
        <S.Title>Nome: {user.name}</S.Title>
        <S.Title>Codigo: #{user.code}</S.Title>
        <S.Title>Aniversário: {user.birthdate}</S.Title>
      </S.Content>
    </S.Wrapper>
  );
}
