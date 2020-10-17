import { Action } from 'overmind';
import config from '@Config';

export const startLoading: Action = ({ state }) => {
  state.app.isLoading = true;
};

export const stoptLoading: Action = ({ state }) => {
  state.app.isLoading = false;
};

export const toggleDarkTheme: Action = ({ state }) => {
  const updatedIsDark = !state.app.isDarkTheme;
  state.app.isDarkTheme = updatedIsDark;

  window.localStorage.setItem(
    config.themeStorageKey,
    JSON.stringify(updatedIsDark)
  );
};
