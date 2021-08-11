import React from 'react';
import { render } from '@testing-library/react';

import { Input } from '../src';

describe('Input', () => {
  test('renders correctly', () => {
    render(<Input label="test" />);
  });
});
