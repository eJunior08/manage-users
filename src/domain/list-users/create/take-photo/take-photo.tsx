import React from 'react';
import {useTakePhoto} from '@domain/list-users/create/take-photo/hooks/useTakePhoto';

import _isEmpty from 'lodash/isEmpty';

import * as S from './styles';
import {StatusBar} from 'react-native';

export function TakePhoto() {
  const takePhoto = useTakePhoto();
  const {imageUri, cameraRef, cameraOptions, functions} = takePhoto;

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
            <S.AuxButton onPress={functions.onPressSwitchFlashMode} />
            <S.MainButton onPress={functions.takePhoto} />
            <S.AuxButton onPress={functions.onPressSwitchCamera} />
          </S.ButtonsContainer>
        </S.Camera>
      )}

      {!_isEmpty(imageUri) && (
        <S.Image source={{uri: imageUri}} resizeMode="cover" />
      )}
    </S.Wrapper>
  );
}
