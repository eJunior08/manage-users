import {color} from '@theme/color';
import styled from 'styled-components/native';

export const Wrapper = styled.Pressable.attrs({
  shadowColor: color.primary,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  /* width: 100%; */
  height: 90px;

  background-color: #e9ecef;
  border-radius: 6px;

  flex-direction: row;

  margin: 0 16px;
`;

export const ProfileImage = styled.Image.attrs({
  source: {
    uri: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  resizeMode: 'cover',
})`
  width: 90px;

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const Content = styled.View`
  padding: 8px 16px;
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 26px;
  color: black;
`;
