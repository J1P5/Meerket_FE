import styled from '@emotion/styled';

const ChatDayWarpper: ReturnType<typeof styled.div> = styled.div`
  min-width: 100px;
  max-width: 302px;
  background-color: ${({ theme }) => theme.colors.grey100};

  p {
    color: ${({ theme }) => theme.colors.black};
  }
  border-radius: 1rem;
  display: flex;
  justify-content: center;
`;

export default ChatDayWarpper;
