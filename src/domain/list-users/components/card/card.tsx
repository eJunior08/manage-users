import React from 'react';

import * as S from './styles';

export function Card({...props}) {
  return (
    <S.Wrapper {...props}>
      <S.ProfileImage />

      <S.Content>
        <S.Title>Nome: Elson Freitas Oliveira Junior</S.Title>
        <S.Title>Codigo: #00001</S.Title>
        <S.Title>Aniversário: 08/06/1997</S.Title>
      </S.Content>
    </S.Wrapper>
  );
}
