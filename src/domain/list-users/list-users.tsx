import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

/* Components */
import {EmptyList} from '@domain/list-users/components/empty-list';
import {HeaderList} from '@domain/list-users/components/header-list';
import {Loading} from '@domain/list-users/components/loading';

/* Model */
import {User} from '@models/user';

import * as S from './styles';

export function ListUsers() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [loading, setLoading] = useState(true);

  const [items, setItems] = useState<User[]>([]);

  const renderItem = ({item}: {item: User}) => {
    const route = 'UserCreate' as never; /* Issue React Navigation */
    return (
      <S.UserCard
        user={item}
        onPress={() => navigation.navigate(route, {user: item} as never)}
      />
    );
  };

  function onPressFAB() {
    const route = 'UserCreate' as never;
    navigation.navigate(route);
  }

  useEffect(() => {
    if (isFocused) {
      const onValueChange = database()
        .ref('/users')
        .orderByChild('createdAt')
        .on('value', snapshot => {
          const data: User[] = [];

          snapshot.forEach(child => {
            data.push({...child.val(), id: child.key});
            return undefined;
          });

          const promises = data.map(
            async d => await storage().ref(d.id).getDownloadURL(),
          );

          Promise.all(promises).then(values => {
            const loadItems = data.map((d, index) => ({
              ...d,
              birthdate: new Date(d.birthdate as string),
              imageUri: values[index],
            }));

            setItems(loadItems.reverse());
            setLoading(false);
          });
        });

      return () => database().ref().off('value', onValueChange);
    }
  }, [isFocused]);

  return (
    <S.Wrapper>
      {!loading && (
        <FlatList
          data={items}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<EmptyList />}
          ListHeaderComponent={<HeaderList />}
        />
      )}

      {loading && <Loading />}

      {!loading && (
        <S.FabButton onPress={onPressFAB}>
          <S.AddIcon />
        </S.FabButton>
      )}
    </S.Wrapper>
  );
}
