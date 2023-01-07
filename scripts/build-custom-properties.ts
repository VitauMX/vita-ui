const fs = require('fs');

const { choices } = require('../tokens.ts');

const buildCustomProperties = (obj, prefix = '') => {
  let choicesString = '';

  if (typeof obj['colors'] === 'object') {
    const colorsKeys = Object.keys(choices['colors']);

    choicesString = colorsKeys.reduce((prev, curr) => {
      if (typeof choices['colors'][curr] === 'object') {
        const brandKeys = Object.keys(obj['colors'][curr]);

        const colorString = brandKeys.reduce((prevBrandKeys, currBrandKeys) => {
          const value = obj['colors'][curr][currBrandKeys];
          return `
          ${prevBrandKeys}
          --colors-${curr}-${currBrandKeys}: ${value};
          `;
        }, '');

        return `
            ${prev}
            ${colorString}
        `;
      } else {
        return `
        ${prev}
        --colors-${curr}: ${obj['colors'][curr]}`;
      }
    }, '');
  }

  const customProperties = choicesString;

  const data = `
    :root {
        ${customProperties} }
    `;

  fs.writeFile('./tokens.css', data, 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
};

buildCustomProperties(choices);
