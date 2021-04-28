import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ButtonPrimary } from '../src';
import { axe } from 'jest-axe';

global.alert = jest.fn();

describe('Button', () => {
  it('renders correctly', () => {
    render(<ButtonPrimary />);
  });

  it('can use onClick', () => {
    const { getByText } = render(
      <ButtonPrimary onClick={() => alert('click')}>Test</ButtonPrimary>
    );
    fireEvent.click(getByText('Test'));
    expect(global.alert).toHaveBeenCalledTimes(1);
  });

  it('should have no axe violations', async () => {
    const { container } = render(<ButtonPrimary>Test</ButtonPrimary>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
