import React from 'react';

import * as S from './styles';

type Props = {
  imageUri: string;
  onConfirmImage: () => void;
};

export function ShowImage({imageUri, onConfirmImage}: Props) {
  return (
    <S.Wrapper onPress={onConfirmImage}>
      <S.Image source={{uri: imageUri}} resizeMode="cover" />
    </S.Wrapper>
  );
}
