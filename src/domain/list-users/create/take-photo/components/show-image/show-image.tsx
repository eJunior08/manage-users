import React, {Dispatch, SetStateAction} from 'react';

import * as S from './styles';

type Props = {
  imageUri: string;
  onConfirmImage: () => void;
  setImageUri: Dispatch<SetStateAction<string>>;
};

export function ShowImage({imageUri, setImageUri, onConfirmImage}: Props) {
  return (
    <S.Wrapper>
      <S.Image source={{uri: imageUri}} resizeMode="cover" />

      <S.ButtonContainer>
        <S.CancelButton onPress={() => setImageUri('')}>
          <S.CloseIcon />
        </S.CancelButton>

        <S.ConfirmButton onPress={onConfirmImage}>
          <S.ConfirmIcon />
        </S.ConfirmButton>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
