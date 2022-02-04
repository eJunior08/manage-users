import React, {Dispatch, MutableRefObject, SetStateAction} from 'react';
import RNDatePicker from 'react-native-date-picker';
import RBSheet from 'react-native-raw-bottom-sheet';

import * as S from './styles';

type Props = {
  refRBSheet: MutableRefObject<RBSheet | null | undefined>;
  date: Date;
  onCloseDatePicker: () => void;
  setDate: Dispatch<SetStateAction<Date>>;
};

export function DatePicker({
  date,
  refRBSheet,
  onCloseDatePicker,
  setDate,
}: Props) {
  return (
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
      <RNDatePicker date={date} onDateChange={setDate} mode="date" />
      <S.Button onPress={onCloseDatePicker}>
        <S.ButtonText>Confirmar</S.ButtonText>
      </S.Button>
    </RBSheet>
  );
}
