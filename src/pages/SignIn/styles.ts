import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space[4]};

  width: ${({ theme }) => theme.space[125]};
  max-width: 90vw;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[6]};

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray300};

  > h1 {
    margin-bottom: ${({ theme }) => theme.space[2]};
  }
`;
