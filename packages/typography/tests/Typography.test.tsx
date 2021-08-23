import React from 'react';
import { render } from '@testing-library/react';

import { Title } from '../src';

describe('Title', () => {
  test('renders correctly', () => {
    render(<Title />);
  });
});
