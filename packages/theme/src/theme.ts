/**
 * Theme should follow the System UI Theme Specification.
 * See: https://system-ui.com/theme
 */

import * as tokens from './utils/tokens.json';
import {
  mapValues,
  mapValuesWithPath,
  mapValuesWithPathAndMultiplier,
} from './utils/getThemeValue';
import { mapValues as mapObjectValues } from 'lodash';

interface GenericObject {
  [key: string]: any;
}

export interface VitaTheme {
  color?: GenericObject;
  letterSpacing?: GenericObject;
  borderWidth?: GenericObject;
  space?: GenericObject;
  borderRadius?: GenericObject;
  size?: GenericObject;
  lineHeights?: GenericObject;
  textStyle?: GenericObject;
  shadow?: GenericObject;
  fontSize?: GenericObject;
  fontWeights?: GenericObject;
  fontFamilies?: GenericObject;
  baseUnits?: GenericObject;
}

export const theme: VitaTheme = {
  color: {
    primitives: mapObjectValues(tokens?.color?.primitives, (value, key) =>
      mapValues(value, key)
    ),
    text: mapValuesWithPath(tokens?.color?.text, tokens),
    background: mapValuesWithPath(tokens?.color?.background, tokens),
    border: mapValuesWithPath(tokens?.color?.border, tokens),
  },
  letterSpacing: mapValues(tokens?.letterSpacing, 'letterSpacing'),
  borderWidth: mapValues(tokens?.borderWidth, 'borderWidth'),
  lineHeights: mapValues(tokens?.lineHeights, 'lineHeights'),
  fontFamilies: mapValues(tokens?.fontFamilies),
  baseUnits: mapValues(tokens?.baseUnits),
  fontSize: mapValuesWithPathAndMultiplier(
    tokens?.fontSize,
    tokens,
    'fontSize'
  ),
  space: mapValuesWithPathAndMultiplier(tokens?.space, tokens, 'space'),
  borderRadius: mapValuesWithPathAndMultiplier(
    tokens?.borderRadius,
    tokens,
    'borderRadius'
  ),
};
