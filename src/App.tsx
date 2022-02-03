import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {ThemeProvider} from 'styled-components';

import * as theme from '@theme/index';

import {Routes} from './router';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor={theme.color.light}
        barStyle="dark-content"
      />

      <View style={styles.container}>
        <Routes />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // paddingTop: StatusBar.currentHeight ?? 0,
  },
});

export default App;
