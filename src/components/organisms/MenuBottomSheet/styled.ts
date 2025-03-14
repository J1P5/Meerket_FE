import styled, { type StyledComponent } from '@emotion/styled';
import { TextButtonWrapper } from 'components/atoms/Button/TextButton/styled';
import { ModalBottomSheet } from 'components/molecules';
import type { ComponentProps } from 'react';

export const MenuBottomSheetWrapper: StyledComponent<
  ComponentProps<typeof ModalBottomSheet>
> = styled(ModalBottomSheet)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.125rem 0 0;
  overflow: hidden;
  ${TextButtonWrapper} {
    position: relative;
    &:hover {
      background-color: ${({ theme }) => theme.colors.grey100};
    }
    &:not(:last-child)::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -0.125rem;
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
    }
  }
`;
