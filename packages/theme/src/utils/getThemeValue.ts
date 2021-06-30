import { get as getValue } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { theme, VitaTheme } from '../theme';
import { Leaves } from './types';

/**
 * Given a theme path it returns its value. If it doesn't find a value,
 * because the custom theme doesn't specify it, it returns the default theme
 * value.
 *
 * @example <caption>Example usage to return the primary font theme value</caption>
 * // returns string
 * getThemeValue('fonts.primary');
 *
 * @param key `string`
 * @returns `string`
 */
export const getThemeValue = (path: Leaves<VitaTheme>) =>
  themeGet(path, getValue(theme, path));
