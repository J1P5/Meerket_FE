import styled from '@emotion/styled';

export const LoadingWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.grey500};
`;

export const Spinner: ReturnType<typeof styled.div> = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.round};
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
