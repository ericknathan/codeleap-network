import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  height: ${({ theme }) => theme.space[20]};
  padding: 0 ${({ theme }) => theme.space[9]};

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  background-color: ${({ theme }) => theme.colors.primary500};
  color: ${({ theme }) => theme.colors.white};
`;