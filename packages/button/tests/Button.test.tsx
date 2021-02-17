import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../src';

describe('Button', () => {
  test('renders correctly', () => {
    render(<Button>{'Test 2'}</Button>);
  });
});
