// Styled-Component setup
import 'jest-styled-components';

// Testing Library setup
import '@testing-library/jest-dom/extend-expect';

// A11y testing setup
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

// Disable warning logs in tests
global.console.warn = jest.fn();

// Disable React warnings.
global.console.error = jest.fn();
