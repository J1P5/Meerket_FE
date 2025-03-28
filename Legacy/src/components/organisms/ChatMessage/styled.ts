import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { IChatMessageProps } from '.';

export const MessageWrapper: ReturnType<typeof styled.div> = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  max-width: 70%;
`;
export const MessageInfoWrapper: ReturnType<typeof styled.div> = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ChatMessageWrapper: ReturnType<
  typeof styled.div<Pick<IChatMessageProps, 'isMe'>>
> = styled.div<Pick<IChatMessageProps, 'isMe'>>`
  display: flex;
  flex-direction: ${({ isMe }) => (isMe ? 'row-reverse' : 'row')};
  align-items: end;
  gap: 0.25rem;
  ${({ isMe, theme }) =>
    isMe &&
    css`
      ${MessageWrapper} {
        background-color: ${theme.colors.primaryDark};
        color: ${theme.colors.white};
      }
      ${MessageInfoWrapper} {
        align-items: end;
      }
    `}
`;
