import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Dimensions} from 'react-native';
import {color} from '@theme/color';
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const Wrapper = styled.View`
  height: ${SCREEN_HEIGHT - 200}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.color.primary};
  font-family: 'Poppins-Regular';
`;

export const StyledIcon = styled(Icon).attrs({
  name: 'list',
  color: color.primary,
  size: 75,
})``;
