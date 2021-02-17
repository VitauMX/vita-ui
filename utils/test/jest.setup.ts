// Styled-Component setup
import 'jest-styled-components';

// Testing Library setup
import '@testing-library/jest-dom/extend-expect';

// Disable warning logs in tests
global.console.warn = jest.fn();

// Disable React warnings.
global.console.error = jest.fn();
