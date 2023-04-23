import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;

  min-height: 100vh;
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};

  width: ${({ theme }) => theme.space[200]};
  max-width: 90vw;
  height: 100%;
  padding-bottom: ${({ theme }) => theme.space[6]};

  background-color: ${({ theme }) => theme.colors.white};

  > *:not(:first-child) {
    margin: 0 ${({ theme }) => theme.space[6]};
  }
`;
