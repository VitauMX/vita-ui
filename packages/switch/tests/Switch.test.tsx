import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Switch } from '../src';

describe('Switch', () => {
  test('renders correctly', () => {
    const { container } = render(<Switch name="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Switch name="test" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
