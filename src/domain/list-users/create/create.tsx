import React from 'react';
import {RouteProp} from '@react-navigation/native';

import _isEmpty from 'lodash/isEmpty';

/* Components */
import {FormInput} from '@domain/list-users/create/components/form-input';
import {DatePicker} from '@domain/list-users/create/components/date-picker';

/* Hooks */
import {useCreate} from '@domain/list-users/create/hooks/useCreate';

/* Types */
import {ParamList} from '@domain/list-users/create/types/param-list';

import * as S from './styles';

type Prop = {
  route: RouteProp<ParamList, 'Detail'>;
};

export function Create({route}: Prop) {
  const create = useCreate(route?.params?.user);
  const {imageUri, isUpdating, refRBSheet, date, payload, functions} = create;

  return (
    <S.Wrapper>
      <S.ProfileContainer onPress={functions.onPressProfile}>
        {!_isEmpty(imageUri) && <S.Image source={{uri: imageUri}} />}

        {_isEmpty(imageUri) && <S.UserIcon />}

        <S.CameraContainer>
          <S.CameraIcon />
        </S.CameraContainer>
      </S.ProfileContainer>

      <FormInput
        payload={payload}
        onChangeText={functions.onChangeText}
        onOpenDatePicker={() => functions.actionDatePicker('open')}
      />

      <S.ButtonContainer>
        <S.Button onPress={functions.onSave}>
          <S.ButtonText>{isUpdating ? 'Editar' : 'Criar'}</S.ButtonText>
        </S.Button>

        {isUpdating && (
          <S.DeleteButton onPress={functions.onRemove}>
            <S.ButtonText>Excluir</S.ButtonText>
          </S.DeleteButton>
        )}
      </S.ButtonContainer>

      <DatePicker
        refRBSheet={refRBSheet}
        date={date}
        onCloseDatePicker={() => functions.actionDatePicker('close')}
        setDate={functions.setDate}
      />
    </S.Wrapper>
  );
}
