import config from '@Config';
export type State = {
  isLoading: boolean;
  isDarkTheme: boolean;
};

export const state: State = {
  isLoading: false,
  isDarkTheme: JSON.parse(
    window.localStorage.getItem(config.themeStorageKey) || 'false'
  ),
};
