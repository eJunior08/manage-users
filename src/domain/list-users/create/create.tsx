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
  const {
    imageUri,
    isUpdating,
    refRBSheet,
    date,
    payload,
    disableCreate,
    loading,
    functions,
  } = create;

  function onHandleSave() {
    if (!loading.saving && !loading.delete) {
      functions.onSave();
    }
  }

  function onHandleDelete() {
    if (!loading.saving && !loading.delete) {
      functions.onRemove();
    }
  }

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
        <S.Button disabled={disableCreate} onPress={onHandleSave}>
          {!loading.saving && (
            <S.ButtonText>{isUpdating ? 'Editar' : 'Criar'}</S.ButtonText>
          )}

          {loading.saving && <S.Indicator />}
        </S.Button>

        {isUpdating && (
          <S.DeleteButton onPress={onHandleDelete}>
            {!loading.delete && <S.ButtonText>Excluir</S.ButtonText>}

            {loading.delete && <S.Indicator />}
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
