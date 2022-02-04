import styled from 'styled-components/native';

import {metric} from '@theme/metrics';

export const Wrapper = styled.View`
  flex: 1;
  background-color: green;
  padding-top: ${metric.statusBarHeight}px;
`;

export const ProfileContainer = styled.Pressable`
  width: 200px;
  height: 200px;

  border-radius: 100px;

  background-color: blue;

  align-self: center;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
`;

export const Button = styled.Pressable`
  width: 100px;
  height: 50px;

  background-color: ${({theme}) => theme.color.primary};
`;
