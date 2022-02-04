import React from 'react';

import * as S from './styles';

export function EmptyList() {
  return (
    <S.Wrapper>
      <S.StyledIcon />
      <S.Title>Nenhum usuário cadastrado</S.Title>
      <S.Title>Pressione o botão para cadastrar</S.Title>
    </S.Wrapper>
  );
}
