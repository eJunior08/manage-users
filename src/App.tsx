import React from 'react';

import {ThemeProvider} from 'styled-components';

import * as theme from '@theme/index';

import {Routes} from './router';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
