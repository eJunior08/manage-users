import {useContext, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

import _isUndefined from 'lodash/isUndefined';
import _isEmpty from 'lodash/isEmpty';

/* Context */
import ProfileContext from '@contexts/profile';

/* Models */
import {User} from '@models/user';

export function useCreate(user: User) {
  const refRBSheet = useRef<RBSheet | null>();
  const navigation = useNavigation();
  const {profileUri, setProfileUri} = useContext(ProfileContext);

  const isUpdating = !_isUndefined(user);

  const [date, setDate] = useState(new Date());
  const imageUri = _isEmpty(profileUri) ? user?.imageUri ?? '' : profileUri;
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

  function actionDatePicker(action: 'open' | 'close') {
    const actionFn = {
      open: () => refRBSheet?.current?.open(),
      close: () => refRBSheet?.current?.close(),

      default: () => refRBSheet?.current?.close(),
    };

    (actionFn[action] || actionFn.default)();
  }

  return {
    refRBSheet,
    imageUri,
    payload,
    date,
    functions: {
      setDate,
      onPressProfile,
      onChangeText,
      onSave,
      actionDatePicker,
    },
  };
}
