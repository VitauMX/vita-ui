import * as React from 'react';
import styled from 'styled-components';

const StyledField = styled.div`
  background: red;
`;

export interface FieldProps {}

export const Field: React.FC<FieldProps> = () => {
  return <StyledField />;
};
