import styled, { css } from "styled-components";

export const inputStyles = css`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.radii.sm};

  border: 1px solid ${({ theme }) => theme.colors.gray600};

  font-size: ${({ theme }) => theme.fontSizes.sm};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary400};
  }
`;

export const TextField = {
  Fieldset: styled.fieldset`
    display: flex;
    flex-direction: column;

    width: 100%;

    border: none;
  `,
  Label: styled.label`
    padding-bottom: ${({ theme }) => theme.space[2]};

    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
  Input: styled.input`
    ${inputStyles}
  `,
  TextArea: styled.textarea`
    ${inputStyles}

    min-height: ${({ theme }) => theme.space[18]};
    max-height: 50vh;
    resize: vertical;
  `,
};
