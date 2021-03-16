import React from 'react';
import { render } from '@testing-library/react';

import { Grid } from '../src';

describe('Grid', () => {
  it('renders consistently', () => {
    const { container } = render(<Grid />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
