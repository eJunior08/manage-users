import {useContext, useEffect, useRef, useState} from 'react';
import {RNCamera} from 'react-native-camera';
// import storage from '@react-native-firebase/storage';
// import {RNCamera} from 'react-native-camera';

import _isEqual from 'lodash/isEqual';
import _isEmpty from 'lodash/isEmpty';

import {TCameraOptions} from '@domain/list-users/create/take-photo/types/camera-options';
import ProfileContext from '@contexts/profile';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function useTakePhoto() {
  const cameraRef = useRef<RNCamera | null>();
  const navigation = useNavigation();

  const {setProfileUri} = useContext(ProfileContext);

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

  const icons = {
    flash: _isEqual(cameraOptions.flashMode, 'off') ? 'flash-off' : 'flash-on',
    switch: 'flip-camera-android',
  };

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
      setImageUri(data?.uri ?? '');
    }
  }

  function onConfirmImage() {
    setProfileUri(imageUri);
    navigation.goBack();
  }

  useEffect(() => {
    const backAction = () => {
      if (_isEmpty(imageUri)) {
        return false;
      }

      setImageUri('');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [imageUri]);

  return {
    cameraRef,
    cameraOptions,
    imageUri,
    icons,
    functions: {
      setImageUri,
      onPressSwitchCamera,
      onPressSwitchFlashMode,
      takePhoto,
      onConfirmImage,
    },
  };
}
