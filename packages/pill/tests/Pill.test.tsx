import React from 'react';
import { render } from '@testing-library/react';

import { Pill } from '../src';

describe('Pill', () => {
  test('renders correctly', () => {
    render(<Pill />);
  });
});
