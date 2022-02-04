import React from 'react';
import {User} from '@models/user';

/* Utils */
import {formatDate} from '@shared/util/date';

import * as S from './styles';

type Props = {
  user: User;
  onPress: () => void;
};

export function Card({user, ...props}: Props) {
  return (
    <S.Wrapper {...props}>
      <S.ProfileImage source={{uri: user.imageUri}} />

      <S.Content>
        <S.Title>Nome: {user.name}</S.Title>
        <S.Title>Codigo: #{user.code}</S.Title>
        <S.Title>
          Aniversário: {formatDate(new Date(user.birthdate as string))}
        </S.Title>
      </S.Content>
    </S.Wrapper>
  );
}
