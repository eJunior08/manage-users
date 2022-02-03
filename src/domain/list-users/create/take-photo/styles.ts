import styled from 'styled-components/native';
import {RNCamera} from 'react-native-camera';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.Image`
  flex: 1;
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

  background-color: red;
`;

export const AuxButton = styled.Pressable`
  width: 40px;
  height: 40px;

  border-radius: 20px;

  background-color: red;
`;
