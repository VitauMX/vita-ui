import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Flex } from '../src';

describe('Flex', () => {
  it('renders correctly', () => {
    const { container } = render(<Flex />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Flex />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have display: flex', () => {
    const { container } = render(<Flex />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });
});
