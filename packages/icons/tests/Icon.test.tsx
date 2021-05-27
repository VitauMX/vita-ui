import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { CommentsIcon } from '../src';

describe('Icons', () => {
  test('renders correctly', () => {
    const { container } = render(<CommentsIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have no axe violations', async () => {
    const { container } = render(<CommentsIcon />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
