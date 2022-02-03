import styled from 'styled-components/native';

import {Card} from '@domain/list-users/components/card';

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 16px;

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
  border-radius: 10px;

  background-color: blue;

  position: absolute;

  bottom: 50px;
  align-self: center;
`;
