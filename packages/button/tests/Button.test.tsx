import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button } from '../src';
import { axe } from 'jest-axe';

global.alert = jest.fn();

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button variant="primary" />);
  });

  it('can use onClick', () => {
    const { getByText } = render(
      <Button variant="primary" onClick={() => alert('click')}>
        Test
      </Button>
    );
    fireEvent.click(getByText('Test'));
    expect(global.alert).toHaveBeenCalledTimes(1);
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Button variant="primary">Test</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
