import styled from "@emotion/styled";
import { DescRegularWrapper } from "components/atoms/Text/styled";
import { IconWithTextWrapper } from "components/molecules/IconWithText/styled";

export const CategoryWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue_main};
  ${IconWithTextWrapper} {
    cursor: default;
  }
`;
export const ItemDetailsHeader: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DescriptionWrapper: ReturnType<typeof styled.div> = styled.div`
  ${DescRegularWrapper} {
    white-space: break-spaces;
  }
`;

export const ItemDetailsWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
