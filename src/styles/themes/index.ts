import darkTheme from './dark';
import lightTheme from './light';

export type TTheme = typeof darkTheme | typeof lightTheme;

export { darkTheme, lightTheme };
