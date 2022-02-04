import styled from 'styled-components/native';

import {Text} from 'react-native';

export const Wrapper = styled.View`
  /* border-bottom-width: 0.5px;
  border-bottom-color: ${({theme}) => theme.color.gray5}; */
  margin: 48px 16px 32px;
`;

export const Title = styled(Text)`
  font-family: 'Poppins-Light';
  color: ${({theme}) => theme.color.gray9};
  font-size: 30px;
`;

export const Subtitle = styled(Text)`
  width: 200px;
  font-family: 'Poppins-Light';
  color: ${({theme}) => theme.color.gray9};
  font-size: 15px;
`;
