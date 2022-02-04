import React, {useContext, useState} from 'react';

import _isUndefined from 'lodash/isUndefined';
import _isEmpty from 'lodash/isEmpty';

import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

import {useNavigation} from '@react-navigation/native';

import * as S from './styles';
import {User} from '@models/user';
import ProfileContext from '@contexts/profile';

export function Create({route}: any) {
  const user = route?.params?.item as User;
  console.log({user});
  const isUpdating = !_isUndefined(user);

  const {profileUri, setProfileUri} = useContext(ProfileContext);

  const imageUri = _isEmpty(profileUri) ? user?.imageUri ?? '' : profileUri;
  console.log({imageUri});

  const navigation = useNavigation();

  const [payload, setPayload] = useState<Omit<User, 'id' | 'imageUri'>>({
    code: isUpdating ? user.code : '',
    name: isUpdating ? user.name : '',
    birthdate: isUpdating ? user.birthdate : '',
  });

  function onPressProfile() {
    const routeName = 'TakePhoto' as never;
    navigation.navigate(routeName);
  }

  function onChangeText(text: string, field: string) {
    setPayload(prev => ({...prev, [field]: text}));
  }

  async function onSave() {
    try {
      const newReference = database().ref('/users').push();
      await newReference.set({
        ...payload,
        id: newReference.key,
        createdAt: new Date().getTime(),
      });

      const reference = storage().ref(newReference.key as string);
      const pathToFile = profileUri;
      await reference.putFile(pathToFile as string);

      setProfileUri('');

      navigation.goBack();
    } catch (error) {
      const message = 'Erro ao tentar salvar';
      console.error(message, error);
    }
  }

  return (
    <S.Wrapper>
      <S.ProfileContainer onPress={onPressProfile}>
        {!_isEmpty(imageUri) && <S.Image source={{uri: imageUri}} />}

        <S.CameraContainer>
          <S.CameraIcon name="photo-camera" size={27.5} color="#fff" />
        </S.CameraContainer>
      </S.ProfileContainer>

      <S.InputContainer>
        <S.Input
          placeholder="Insira o código"
          value={payload.code}
          onChangeText={text => onChangeText(text, 'code')}
        />
        <S.Input
          placeholder="Insira o nome"
          value={payload.name}
          onChangeText={text => onChangeText(text, 'name')}
        />
        <S.Input
          placeholder="Insira a data de nascimento"
          value={payload.birthdate}
          onChangeText={text => onChangeText(text, 'birthdate')}
        />
      </S.InputContainer>

      <S.Button onPress={onSave} />
    </S.Wrapper>
  );
}
