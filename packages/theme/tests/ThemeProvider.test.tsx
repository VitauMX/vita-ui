import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '../src';

describe('Themeprovider', () => {
  test('renders correctly', () => {
    render(<ThemeProvider theme={{}} />);
  });
});
