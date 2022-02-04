import {User} from '@models/user';
import React from 'react';

import * as S from './styles';

type Props = {
  payload: Omit<User, 'id' | 'imageUri'>;
  onChangeText: (
    text: string,
    field: keyof Partial<Omit<User, 'id' | 'imageUri'>>,
  ) => void;
};

export function FormInput({payload, onChangeText}: Props) {
  return (
    <S.Wrapper>
      <S.Input
        placeholder="Insira o código"
        value={payload.code}
        onChangeText={text => onChangeText(text, 'code')}
      />
      <S.Input
        placeholder="Insira o nome"
        value={payload.name}
        onChangeText={text => onChangeText(text, 'name')}
      />
      <S.Input
        placeholder="Insira a data de nascimento"
        value={payload.birthdate}
        onChangeText={text => onChangeText(text, 'birthdate')}
      />
    </S.Wrapper>
  );
}
