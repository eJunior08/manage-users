import styled from 'styled-components/native';

import {Dimensions} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const Wrapper = styled.View`
  height: ${SCREEN_HEIGHT}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: black;
  font-family: 'Poppins-Regular';
`;
