import {useContext, useEffect, useRef, useState} from 'react';
import {BackHandler} from 'react-native';
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

  const [loading, setLoading] = useState({
    saving: false,
    delete: false,
  });
  const [date, setDate] = useState(new Date());
  const imageUri = _isEmpty(profileUri) ? user?.imageUri ?? '' : profileUri;
  const [payload, setPayload] = useState<Omit<User, 'id' | 'imageUri'>>({
    code: isUpdating ? user.code : '',
    name: isUpdating ? user.name : '',
    birthdate: isUpdating ? user.birthdate : undefined,
  });

  const disableCreate = getDisableCreate(payload);

  function getDisableCreate(object: Omit<User, 'id' | 'imageUri'>) {
    if (isUpdating) {
      return false;
    }

    const {code, name, birthdate} = object;

    return (
      _isEmpty(code) || _isEmpty(name) || !birthdate || _isEmpty(profileUri)
    );
  }

  function onPressProfile() {
    const routeName = 'TakePhoto' as never;
    navigation.navigate(routeName);
  }

  function onChangeText(text: string, field: string) {
    setPayload(prev => ({...prev, [field]: text}));
  }

  async function updateUser() {
    setLoading(prev => ({...prev, saving: true}));

    const birth = payload.birthdate?.toString();

    await database()
      .ref(`/users/${user.id}`)
      .set({...user, ...payload, birthdate: birth});

    if (!_isEmpty(profileUri)) {
      const reference = storage().ref(user.id);
      const pathToFile = profileUri;
      await reference.putFile(pathToFile as string);
    }

    setLoading(prev => ({...prev, saving: false}));
  }

  async function createUser() {
    setLoading(prev => ({...prev, saving: true}));

    const newReference = database().ref('/users').push();

    const newUser = {
      ...payload,
      birthdate: payload.birthdate?.toString(),
      id: newReference.key,
      createdAt: new Date().getTime(),
    };

    await newReference.set(newUser);

    const reference = storage().ref(newReference.key as string);
    const pathToFile = profileUri;
    await reference.putFile(pathToFile as string);

    setLoading(prev => ({...prev, saving: false}));
  }

  async function onSave() {
    try {
      if (isUpdating) {
        await updateUser();
      } else {
        await createUser();
      }

      setProfileUri('');
      navigation.goBack();
    } catch (error) {
      const message = 'Erro ao tentar salvar';
      console.error(message, error);
    }
  }

  async function onRemove() {
    try {
      setLoading(prev => ({...prev, delete: true}));

      await database().ref(`/users/${user.id}`).remove();

      const reference = storage().ref(user.id);
      await reference.delete();

      setProfileUri('');
      navigation.goBack();
      setLoading(prev => ({...prev, delete: false}));
    } catch (error) {
      const message = 'Erro ao tentar excluir usuário.';
      console.error(message, error);
    }
  }

  function actionDatePicker(action: 'open' | 'close') {
    const actionFn = {
      open: () => {
        setDate((payload.birthdate as Date) ?? new Date());
        refRBSheet?.current?.open();
      },
      close: () => {
        setPayload(prev => ({...prev, birthdate: date}));
        refRBSheet?.current?.close();
      },

      default: () => refRBSheet?.current?.close(),
    };

    (actionFn[action] || actionFn.default)();
  }

  useEffect(() => {
    const backAction = () => {
      setProfileUri('');
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [setProfileUri]);

  return {
    loading,
    disableCreate,
    refRBSheet,
    imageUri,
    payload,
    date,
    isUpdating,
    functions: {
      setDate,
      onPressProfile,
      onChangeText,
      onSave,
      actionDatePicker,
      onRemove,
    },
  };
}
