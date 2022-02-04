import styled from 'styled-components/native';

import {Text} from 'react-native';

import {color} from '@theme/color';

export const Wrapper = styled.View`
  height: 200px;
  justify-content: space-between;
  margin: 0 16px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: color.placeholderColor,
})`
  border-bottom-width: 1px;
  color: ${({theme}) => theme.color.gray8};
  font-family: 'Poppins-Regular';
  height: 50px;
`;

export const DateInput = styled.Pressable`
  border-bottom-width: 1px;
  height: 50px;
  justify-content: center;
`;

export const FakePlaceholder = styled(Text)`
  color: ${({theme}) => theme.color.placeholderColor};
  font-family: 'Poppins-Regular';
`;
