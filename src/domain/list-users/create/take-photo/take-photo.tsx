import React from 'react';
import {useTakePhoto} from '@domain/list-users/create/take-photo/hooks/useTakePhoto';

import _isEmpty from 'lodash/isEmpty';

import * as S from './styles';
import {StatusBar} from 'react-native';
import {ShowImage} from './components/show-image';

export function TakePhoto() {
  const takePhoto = useTakePhoto();
  const {imageUri, cameraRef, cameraOptions, icons, functions} = takePhoto;

  return (
    <S.Wrapper>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {_isEmpty(imageUri) && (
        <S.Camera
          ref={ref => (cameraRef.current = ref)}
          captureAudio={false}
          type={cameraOptions.type}
          flashMode={cameraOptions.flashMode}
          androidCameraPermissionOptions={
            cameraOptions.androidCameraPermission
          }>
          <S.ButtonsContainer>
            <S.AuxButton onPress={functions.onPressSwitchFlashMode}>
              <S.StyledIcon name={icons.flash} color="#FFF" size={20} />
            </S.AuxButton>
            <S.MainButton onPress={functions.takePhoto} />
            <S.AuxButton onPress={functions.onPressSwitchCamera}>
              <S.StyledIcon name={icons.switch} color="#FFF" size={20} />
            </S.AuxButton>
          </S.ButtonsContainer>
        </S.Camera>
      )}

      {!_isEmpty(imageUri) && (
        <ShowImage
          setImageUri={functions.setImageUri}
          imageUri={imageUri}
          onConfirmImage={functions.onConfirmImage}
        />
      )}
    </S.Wrapper>
  );
}
