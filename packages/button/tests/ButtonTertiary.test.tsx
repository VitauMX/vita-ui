import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ButtonTertiary } from '../src';
import { axe } from 'jest-axe';

global.alert = jest.fn();

describe('Button', () => {
  it('renders correctly', () => {
    render(<ButtonTertiary />);
  });

  it('can use onClick', () => {
    const { getByText } = render(
      <ButtonTertiary onClick={() => alert('click')}>Test</ButtonTertiary>
    );
    fireEvent.click(getByText('Test'));
    expect(global.alert).toHaveBeenCalledTimes(1);
  });

  it('should have no axe violations', async () => {
    const { container } = render(<ButtonTertiary>Test</ButtonTertiary>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
