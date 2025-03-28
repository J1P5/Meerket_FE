import type { ComponentProps } from "react";
import styled, { type StyledComponent } from "@emotion/styled";
import { ModalBottomSheet } from "components/molecules";
import {
  DescRegularWrapper,
  TitleBoldWrapper,
} from "components/atoms/Text/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";

export const AuctionBidBottomSheetWrapper: StyledComponent<
  ComponentProps<typeof ModalBottomSheet>
> = styled(ModalBottomSheet)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${TitleBoldWrapper} {
    color: ${({ theme }) => theme.colors.primary};
  }
  ${DescRegularWrapper} {
    color: ${({ theme }) => theme.colors.grey500};
  }
  ${TextButtonWrapper} {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    &:disabled {
      cursor: default;
      background-color: ${({ theme }) =>
        theme.colors.grey400};
    }
  }
`;
