// Testing Library setup
import '@testing-library/jest-dom/extend-expect';

// Styled-Component setup
import 'jest-styled-components';

// A11y testing setup
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);
