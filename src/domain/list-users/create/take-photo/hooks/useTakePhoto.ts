import {useRef, useState} from 'react';
import {RNCamera} from 'react-native-camera';
// import {RNCamera} from 'react-native-camera';

import _isEqual from 'lodash/isEqual';

import {TCameraOptions} from '@domain/list-users/create/take-photo/types/camera-options';

export function useTakePhoto() {
  const cameraRef = useRef<RNCamera | null>();

  const [cameraOptions, setCameraOptions] = useState<TCameraOptions>({
    type: 'front',
    flashMode: 'off',
    androidCameraPermission: {
      title: 'Permissão para usar a câmera',
      message: 'Precisamos de sua permissão para sua foto de perfil',
      buttonPositive: 'Permitir',
      buttonNegative: 'Cancelar',
    },
  });

  const [imageUri, setImageUri] = useState<string>('');

  function onPressSwitchCamera() {
    const type = _isEqual(cameraOptions.type, 'front') ? 'back' : 'front';
    setCameraOptions(prev => ({...prev, type, flashMode: 'off'}));
  }

  function onPressSwitchFlashMode() {
    const flashMode = _isEqual(cameraOptions.flashMode, 'off')
      ? 'torch'
      : 'off';
    setCameraOptions(prev => ({...prev, flashMode}));
  }

  async function takePhoto() {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef?.current?.takePictureAsync(options);
      console.log(data?.uri);
      setImageUri(data?.uri ?? '');
    }
  }

  return {
    cameraRef,
    cameraOptions,
    imageUri,
    functions: {onPressSwitchCamera, onPressSwitchFlashMode, takePhoto},
  };
}
