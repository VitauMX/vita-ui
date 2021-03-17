import * as React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  background: red;
`;

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
  return <StyledLayout />;
};
