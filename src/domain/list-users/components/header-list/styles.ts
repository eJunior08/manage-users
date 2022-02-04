import styled from 'styled-components/native';

import {Text} from 'react-native';

export const Wrapper = styled.View`
  margin: 48px 16px 32px;
`;

export const Title = styled(Text)`
  font-family: 'Poppins-Light';
  color: ${({theme}) => theme.color.primary};
  font-size: 30px;
`;

export const Subtitle = styled(Text)`
  width: 200px;
  font-family: 'Poppins-Light';
  color: ${({theme}) => theme.color.primary};
  font-size: 15px;
`;
