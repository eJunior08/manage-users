import styled from 'styled-components/native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
`;

export const MainButton = styled.Pressable`
  width: 70px;
  height: 70px;

  border-radius: 35px;

  margin: 0px 80px;

  border-color: ${({theme}) => theme.color.gray9};

  border-width: 5px;
`;

export const AuxButton = styled.Pressable`
  width: 50px;
  height: 50px;

  border-radius: 20px;

  background-color: ${({theme}) => theme.color.gray9};

  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled(Icon)``;
