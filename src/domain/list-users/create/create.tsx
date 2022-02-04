import React, {useState} from 'react';

import database from '@react-native-firebase/database';

import {useNavigation} from '@react-navigation/native';

import * as S from './styles';
import {User} from '@models/user';

export function Create() {
  const navigation = useNavigation();

  const [payload, setPayload] = useState<User>({
    code: '',
    name: '',
    birthdate: '',
  });

  function onPressProfile() {
    const route = 'TakePhoto' as never;
    navigation.navigate(route);
  }

  function onChangeText(text: string, field: string) {
    setPayload(prev => ({...prev, [field]: text}));
  }

  async function onSave() {
    try {
      const newReference = database().ref('/users').push();
      await newReference.set({...payload, createdAt: new Date().getTime()});
      navigation.goBack();
    } catch (error) {
      const message = 'Erro ao tentar salvar';
      console.error(message, error);
    }
  }

  return (
    <S.Wrapper>
      <S.ProfileContainer onPress={onPressProfile} />

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

      <S.Button onPress={onSave} />
    </S.Wrapper>
  );
}
