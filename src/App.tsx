import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTheme } from 'emotion-theming';
import { Global } from '@emotion/core';

import globalStyles from './styles/Global';
import Routes from './Routes';
import Header from '@Components/Header';
import { TTheme } from './styles/themes';

export default function App() {
  const theme: TTheme = useTheme();

  return (
    <Router>
      <Global styles={globalStyles(theme)} />

      <Header />
      <Routes />
    </Router>
  );
}
