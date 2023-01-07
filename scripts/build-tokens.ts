const { choices, decisions } = require('../tokens.ts');
const toKebabCase = require('../utils/toKebabCase.ts');
const fs = require('fs');

const cleanLines = (string = '') => string.trim().replace(/^\n\n/gm, '\n');

function transformTokens(parentKey, object) {
  // Obtiene un array con todas las claves del objeto
  const objectKeys = Object.keys(object);

  // Devuelve una cadena con la transformación de los tokens
  // utilizando reduce() para procesar cada clave del objeto
  return objectKeys.reduce((transformedTokens, objectKey) => {
    // Obtiene el valor de la clave actual del objeto
    const value = object[objectKey];

    // Crea la propiedad personalizada para el token actual
    // utilizando la propiedad de padre si está disponible
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(`${objectKey}`);

    // Si el valor es un array, devuelve un token con la
    // propiedad personalizada y el valor como una lista separada por comas
    if (Array.isArray(value)) {
      return `${transformedTokens}\n  --${customProperty}: ${value.join(
        ', '
      )};`;
    }
    // Si el valor es un objeto, llama recursivamente a la función
    // transformTokens() con la propiedad personalizada y el valor del objeto
    else if (typeof value === 'object') {
      return `${transformedTokens}\n${transformTokens(customProperty, value)}`;
    }

    // Si el valor no es un array ni un objeto, devuelve un token
    // con la propiedad personalizada y el valor
    const label = `--${parentKey}-${toKebabCase(objectKey)}`;
    return `${transformedTokens}\n  ${label}: ${value};`;
  }, '');
}

function buildTokens() {
  const transformedChoices = transformTokens(null, choices);
  const transformedDecisions = transformTokens(null, decisions);
  const customProperties = `${transformedChoices}${transformedDecisions}`;

  const data = `:root {\n  ${cleanLines(customProperties)}\n}\n`;

  fs.writeFile('.storybook/tokens.css', data, 'utf8', (error) => {
    if (error) throw error;
    console.log('🎨 Custom properties created!');
  });
}

buildTokens();
