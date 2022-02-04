import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.View`
  flex: 1;
  position: relative;
`;

export const Image = styled.Image`
  flex: 1;
`;

const Button = styled.Pressable`
  width: 80px;
  height: 80px;

  border-radius: 25px;

  margin: 0 16px;

  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  position: absolute;

  flex-direction: row;
  align-items: center;

  bottom: 32px;
  align-self: center;
`;

export const ConfirmButton = styled(Button)`
  background-color: ${({theme}) => theme.color.gray8};
`;

export const CancelButton = styled(Button)`
  background-color: ${({theme}) => theme.color.error};
`;

export const ConfirmIcon = styled(Icon).attrs({
  name: 'done',
  color: '#FFF',
  size: 40,
})``;

export const CloseIcon = styled(Icon).attrs({
  name: 'close',
  color: '#FFF',
  size: 40,
})``;
