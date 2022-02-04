import styled from 'styled-components/native';

import {Text} from 'react-native';

export const Title = styled(Text)`
  color: ${({theme}) => theme.color.gray9};
  font-family: 'Poppins-Regular';
  font-size: 20px;
`;

export const Button = styled.Pressable`
  background-color: ${({theme}) => theme.color.primary};

  width: 200px;
  height: 50px;

  align-items: center;
  justify-content: center;

  border-radius: 16px;
`;

export const ButtonText = styled(Text)`
  color: ${({theme}) => theme.color.gray1};
  font-family: 'Poppins-Light';
  font-size: 16px;
`;
