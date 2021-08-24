import React from 'react';
import { render } from '@testing-library/react';

import { Select } from '../src';

describe('Select', () => {
  test('renders correctly', () => {
    render(<Select />);
  });
});
