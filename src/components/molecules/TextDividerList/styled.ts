import styled from '@emotion/styled';

export const TextDividerTextWrapper: ReturnType<typeof styled.div> = styled.div`
  padding: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey200};
  }
`;

export const TextDividerListWrapper: ReturnType<typeof styled.div> = styled.div`
  cursor: pointer;
`;
