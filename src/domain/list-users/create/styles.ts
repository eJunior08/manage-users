import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {metric} from '@theme/metrics';
import {color} from '@theme/color';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.backgroundColor};
  padding-top: ${metric.statusBarHeight}px;

  justify-content: space-evenly;
`;

export const ProfileContainer = styled.Pressable`
  width: 200px;
  height: 200px;

  border-radius: 100px;

  background-color: ${({theme}) => theme.color.gray3};

  align-self: center;

  align-items: center;
  justify-content: center;

  position: relative;

  margin-bottom: 50px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 200px;
  height: 200px;

  border-radius: 100px;
`;

export const CameraContainer = styled.View`
  width: 55px;
  height: 55px;

  border-radius: 27.5px;

  background-color: ${({theme}) => theme.color.gray4};

  position: absolute;

  bottom: -25px;
  align-self: center;

  align-items: center;
  justify-content: center;
`;

export const UserIcon = styled(Icon).attrs({
  name: 'person',
  size: 100,
  color: '#fff',
})``;

export const CameraIcon = styled(Icon).attrs({
  name: 'photo-camera',
  size: 27.5,
  color: '#fff',
})``;

export const InputContainer = styled.View`
  /* flex: 1; */
  height: 200px;
  justify-content: space-between;
  margin: 0 16px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: color.placeholderColor,
})`
  border-bottom-width: 1px;
  color: red;
`;

export const ButtonContainer = styled.View``;

export const Button = styled.Pressable`
  background-color: ${({theme, disabled}) =>
    disabled ? theme.color.gray4 : theme.color.primary};

  width: 200px;
  height: 50px;

  align-self: center;

  align-items: center;
  justify-content: center;

  border-radius: 16px;

  margin-bottom: 10px;
`;

export const DeleteButton = styled(Button)`
  ]background-color: ${({theme}) => theme.color.error};
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.color.gray1};
  font-family: 'Poppins-Light';
  font-size: 16px;
`;

export const Indicator = styled.ActivityIndicator.attrs({
  color: color.gray1,
})``;
