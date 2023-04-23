import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styled, { keyframes } from "styled-components";

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const ModalOverlay = styled(AlertDialog.Overlay)`
  position: fixed;
  inset: 0;

  background-color: ${({ theme }) => theme.colors.gray600};
  opacity: 0.8;

  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalContent = styled(AlertDialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};

  width: ${({ theme }) => theme.space[165]};
  max-width: 90vw;
  padding: ${({ theme }) => theme.space[6]};

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.md};

  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
`;
