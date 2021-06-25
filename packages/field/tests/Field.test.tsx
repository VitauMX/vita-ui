import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Field } from '../src';

describe('Field', () => {
  test('renders correctly', () => {
    const { container } = render(<Field label="Basic field" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Field label="Basic field" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLInputElement>();
    const label = 'Basic field';
    const { getByLabelText } = render(<Field ref={ref} label={label} />);

    expect(getByLabelText(label)).toBe(ref.current);
  });

  test('should render with disabled', () => {
    const { container } = render(
      <Field label="Basic field" defaultValue="Value" disabled />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render with success', () => {
    const { container } = render(
      <Field label="Basic field" defaultValue="Value" validation="success" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render with error', () => {
    const { container } = render(
      <Field label="Basic field" defaultValue="Value" validation="error" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
