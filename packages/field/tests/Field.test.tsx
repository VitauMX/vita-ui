import React from 'react';
import { render } from '@testing-library/react';

import { Field } from '../src';

describe('Field', () => {
  test('renders correctly', () => {
    render(<Field label="Basic field" />);
  });
});
