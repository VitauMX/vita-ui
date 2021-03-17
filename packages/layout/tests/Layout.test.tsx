import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Grid } from '../src';

describe('Grid', () => {
  it('renders consistently', () => {
    const { container } = render(<Grid />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Grid />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have display: grid', () => {
    const { container } = render(<Grid />);
    expect(container.firstChild).toHaveStyleRule('display', 'grid');
  });
});
