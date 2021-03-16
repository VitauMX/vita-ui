import React from 'react';
import { render } from '@testing-library/react';

import { Layout } from '../src';

describe('Layout', () => {
  test('renders correctly', () => {
    render(<Layout />);
  });
});
