import { get as getValue } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { theme, VitaTheme } from '../theme';
import { Leaves } from './types';
import { chain, get } from 'lodash';

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

export const mapValues = (object: any, prefixInKeys = '') => {
  return chain(object)
    .mapKeys((_, key) => prefixInKeys + key)
    .mapValues((value) => value?.value)
    .value();
};

export const mapValuesWithPath: any = (
  object: any,
  tokens: any,
  prefixInKeys = ''
) =>
  chain(object)
    .mapKeys((_, key) => prefixInKeys + key)
    .mapValues((value) => {
      const path = value?.value;

      if (typeof path !== 'string') {
        return mapValuesWithPath(value, tokens);
      }

      return get(tokens?.default, path.replace('$', ''))?.value;
    })
    .value();

export const mapValuesWithPathAndMultiplier = (
  object: any,
  tokens: any,
  prefixInKeys = ''
) => {
  return chain(object)
    .mapKeys((_, key) => prefixInKeys + key)
    .mapValues((value) => {
      const [path, multiplier] = value?.value?.split(' * ');
      const pathValue = Number(
        get(tokens?.default, path.replace('$', ''), '0')?.value
      );

      return pathValue * Number(multiplier ?? 0);
    })
    .value();
};
