import styled from "styled-components";

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray400};

  border-radius: ${({ theme }) => theme.radii.md};

  overflow: hidden;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[6]};

  background-color: ${({ theme }) => theme.colors.primary500};
  color: ${({ theme }) => theme.colors.white};

  > div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
  }
`;

export const CardContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};

  padding: ${({ theme }) => theme.space[6]};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors.gray600};

    > span {
      font-weight: 700;
    }
  }
`;
