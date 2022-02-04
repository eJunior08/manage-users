import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {ThemeProvider} from 'styled-components';

import * as theme from '@theme/index';

import {Routes} from './router';
import {ProfileProvider} from '@contexts/profile';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor={theme.color.backgroundColor}
        barStyle="dark-content"
      />

      <View style={styles.container}>
        <ProfileProvider>
          <Routes />
        </ProfileProvider>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.backgroundColor,
  },
});

export default App;
