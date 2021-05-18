import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ButtonText } from '../src';
import { axe } from 'jest-axe';

global.alert = jest.fn();

describe('Button', () => {
  it('renders correctly', () => {
    render(<ButtonText />);
  });

  it('can use onClick', () => {
    const { getByText } = render(
      <ButtonText onClick={() => alert('click')}>Test</ButtonText>
    );
    fireEvent.click(getByText('Test'));
    expect(global.alert).toHaveBeenCalledTimes(1);
  });

  it('should have no axe violations', async () => {
    const { container } = render(<ButtonText>Test</ButtonText>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
