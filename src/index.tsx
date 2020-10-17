import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './App';
import { StateProvider } from '@State';
import { useStore } from '@State';
import { ThemeProvider } from 'emotion-theming';
import { darkTheme, lightTheme } from './styles/themes';

/**
 * This component exists because:
 * ******************************
 * ThemeProvider needs state to determine the current theme,
 * so it must be nested within StateProvider
 *
 * App uses useTheme() to get theme for global styles,
 * so it needs to be nested under ThemeProvider
 *
 */
function ThemeWrapper({ children }: any) {
  const state = useStore();

  /* Currently supporting only light and dark themes */
  return (
    <ThemeProvider theme={state.app.isDarkTheme ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

ReactDOM.render(
  // <React.StrictMode>
  <StateProvider>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </StateProvider>,
  // </React.StrictMode>
  document.getElementById('root')
);
