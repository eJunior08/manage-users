import {User} from '@models/user';
import React from 'react';

import * as S from './styles';

type Props = {
  payload: Omit<User, 'id' | 'imageUri'>;
  onChangeText: (
    text: string,
    field: keyof Partial<Omit<User, 'id' | 'imageUri'>>,
  ) => void;
  onOpenDatePicker: () => void;
};

export function FormInput({payload, onChangeText, onOpenDatePicker}: Props) {
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
      <S.DateInput onPress={onOpenDatePicker}>
        <S.FakePlaceholder>Insira a data de aniversário</S.FakePlaceholder>
      </S.DateInput>
    </S.Wrapper>
  );
}
