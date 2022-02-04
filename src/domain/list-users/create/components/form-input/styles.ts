import styled from 'styled-components/native';

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
  color: red;
`;
