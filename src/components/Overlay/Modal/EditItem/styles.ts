import styled from "styled-components";

export const EditItemForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`;

export const ModalActions = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space[4]};
`