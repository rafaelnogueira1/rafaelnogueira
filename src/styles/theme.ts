import { DefaultTheme } from 'styled-components';
import { themeColors } from './colors';

export interface Theme {
	colors: typeof themeColors;
}

const theme: DefaultTheme = {
	colors: themeColors,
};

export default theme;
