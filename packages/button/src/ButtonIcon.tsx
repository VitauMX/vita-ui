import styled, { css } from 'styled-components';

type ButtonIconProps = {
  marginEnd?: string;
  marginStart?: string;
};

const marginEnd = (props: ButtonIconProps) => {
  return css`
    margin-inline-end: ${props.marginEnd};
  `;
};

const marginStart = (props: ButtonIconProps) => {
  return css`
    margin-inline-start: ${props.marginStart};
  `;
};

export const ButtonIcon = styled.span<ButtonIconProps>`
  display: inline-flex;
  align-self: center;
  flex-shrink: 0;
  ${marginEnd}
  ${marginStart}
`;
