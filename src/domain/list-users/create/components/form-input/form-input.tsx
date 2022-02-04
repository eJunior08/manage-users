import React from 'react';

/* Models */
import {User} from '@models/user';

/* Utils */
import {formatDate} from '@shared/util/date';

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
        {!payload.birthdate && (
          <S.FakePlaceholder>Insira a data de aniversário</S.FakePlaceholder>
        )}

        {payload.birthdate && (
          <S.DateText>{formatDate(payload.birthdate)}</S.DateText>
        )}
      </S.DateInput>
    </S.Wrapper>
  );
}
