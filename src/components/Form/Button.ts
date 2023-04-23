import styled, { DefaultTheme, css } from "styled-components";

type ColorVariants = "primary" | "danger" | "success" | "black";

interface ButtonProps {
  color?: ColorVariants;
  align?: "start" | "center" | "end";
  variant?: "solid" | "outlined";
}

const colorVariants: Record<ColorVariants, keyof DefaultTheme["colors"]> = {
  primary: "primary500",
  danger: "red500",
  success: "green500",
  black: "black",
};

const BaseButton = styled.button<ButtonProps>`
  ${({ theme, color, variant }) =>
    variant === "outlined"
      ? css`
          border: 1px solid ${theme.colors[colorVariants[color || "primary"]]}AA;
          background-color: transparent;
          color: ${theme.colors[colorVariants[color || "primary"]]};
        `
      : css`
          border: none;
          background-color: ${theme.colors[colorVariants[color || "primary"]]};
          color: ${theme.colors.white};
        `}

  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;

  cursor: pointer;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out,
    filter 0.2s ease-in-out;

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    filter: brightness(1.1);
  }

  &:focus {
    outline: 2px solid
      ${({ theme, color }) => theme.colors[colorVariants[color || "primary"]]}88;
    outline-offset: 2px;
  }
`;

export const Button = styled(BaseButton)`
  align-self: ${({ align }) => align || "flex-start"};

  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[8]};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const IconButton = styled(BaseButton)`
  width: ${({ theme }) => theme.space[10]};
  height: ${({ theme }) => theme.space[10]};
  padding: ${({ theme }) => theme.space[1]};
  border-radius: 50%;

  > * {
    width: 100%;
  }
`;
