import styled from 'styled-components/native';
import {color} from '@theme/color';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled.ActivityIndicator.attrs({
  color: color.primary,
  size: 'large',
})``;
