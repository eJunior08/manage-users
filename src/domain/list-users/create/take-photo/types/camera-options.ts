import {CameraType, FlashMode} from 'react-native-camera';

export type TCameraOptions = {
  type: keyof CameraType;
  flashMode: keyof FlashMode;
  androidCameraPermission: {
    title: string;
    message: string;
    buttonPositive?: string;
    buttonNegative?: string;
    buttonNeutral?: string;
  } | null;
};
