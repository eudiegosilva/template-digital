import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from './Button';

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `
};

export const ButtonWrapper = styled.button<ButtonProps>`
  ${({ theme, variant, isFullWidth }) => css`
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    width: ${isFullWidth ? '100%' : 'unset'};

    &:hover {
      cursor: pointer;
    }

    ${!!variant && buttonModifiers[variant](theme)}
  `}
`;
