import styled from '@emotion/styled';

export const ErrorMessageWrapper: ReturnType<typeof styled.div> = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;
