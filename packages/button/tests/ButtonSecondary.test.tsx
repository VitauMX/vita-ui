import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ButtonSecondary } from '../src';
import { axe } from 'jest-axe';

global.alert = jest.fn();

describe('Button', () => {
  it('renders correctly', () => {
    render(<ButtonSecondary />);
  });

  it('can use onClick', () => {
    const { getByText } = render(
      <ButtonSecondary onClick={() => alert('click')}>Test</ButtonSecondary>
    );
    fireEvent.click(getByText('Test'));
    expect(global.alert).toHaveBeenCalledTimes(1);
  });

  it('should have no axe violations', async () => {
    const { container } = render(<ButtonSecondary>Test</ButtonSecondary>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
