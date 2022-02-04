import React from 'react';
import {Button} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import RBSheet from 'react-native-raw-bottom-sheet';

import _isEmpty from 'lodash/isEmpty';

/* Hooks */
import {useCreate} from '@domain/list-users/create/hooks/useCreate';

/* Models */
import {User} from '@models/user';

import * as S from './styles';

type ParamList = {
  Detail: {
    user: User;
  };
};

type Prop = {
  route: RouteProp<ParamList, 'Detail'>;
};

export function Create({route}: Prop) {
  const create = useCreate(route?.params?.user);
  const {imageUri, refRBSheet, date, payload, functions} = create;

  return (
    <S.Wrapper>
      <S.ProfileContainer onPress={functions.onPressProfile}>
        {!_isEmpty(imageUri) && <S.Image source={{uri: imageUri}} />}

        <S.CameraContainer>
          <S.CameraIcon name="photo-camera" size={27.5} color="#fff" />
        </S.CameraContainer>
      </S.ProfileContainer>

      <S.InputContainer>
        <S.Input
          placeholder="Insira o código"
          value={payload.code}
          onChangeText={text => functions.onChangeText(text, 'code')}
        />
        <S.Input
          placeholder="Insira o nome"
          value={payload.name}
          onChangeText={text => functions.onChangeText(text, 'name')}
        />
        <S.Input
          placeholder="Insira a data de nascimento"
          value={payload.birthdate}
          onChangeText={text => functions.onChangeText(text, 'birthdate')}
        />
      </S.InputContainer>

      <S.Button onPress={functions.onSave} />

      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => functions.actionDatePicker('open')}
      />

      <RBSheet
        ref={ref => (refRBSheet.current = ref)}
        height={350}
        openDuration={250}
        animationType="slide"
        customStyles={{
          wrapper: {},
          container: {
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingVertical: 10,
          },
        }}>
        <S.Title>Selecione uma data</S.Title>
        <DatePicker date={date} onDateChange={functions.setDate} mode="date" />
        <S.Button onPress={() => functions.actionDatePicker('close')} />
      </RBSheet>
    </S.Wrapper>
  );
}
