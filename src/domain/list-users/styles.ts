import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Card} from '@domain/list-users/components/card';

import {metric} from '@theme/metrics';

export const Wrapper = styled.View`
  flex: 1;
  margin-top: ${metric.statusBarHeight}px;

  background-color: ${({theme}) => theme.color.backgroundColor};

  position: relative;
`;

export const UserCard = styled(Card)`
  margin-bottom: 10px;
`;

export const FabButton = styled.Pressable.attrs({
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  width: 80px;
  height: 80px;
  border-radius: 30px;

  background-color: ${({theme}) => theme.color.primary};

  position: absolute;

  bottom: 50px;
  align-self: center;

  align-items: center;
  justify-content: center;
`;

export const AddIcon = styled(Icon).attrs({
  name: 'add',
  size: 30,
  color: '#fff',
})``;
