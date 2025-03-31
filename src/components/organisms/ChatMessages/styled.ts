import styled from '@emotion/styled';
import { IconButtonWrapper } from 'components/atoms/Button/IconButton/styled';
import { InputWrapper } from 'components/atoms/Input/styled';
import { InputWithButtonWrapper } from 'components/molecules/InputWithButton/styled';

export const ChatBubblesWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  .chat-date {
    display: flex;
    justify-content: center;
  }
`;

export const WriteBoxWrapper: ReturnType<typeof styled.div> = styled.div`
  position: fixed;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: ${({ theme }) => theme.sizes.max_width};
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  bottom: 0;
  ${InputWithButtonWrapper} {
  }

  ${InputWrapper} {
    flex: 1;
    padding: 0.9375rem;
    background-color: ${({ theme }) => theme.colors.grey100};
    border: none;
    input {
      background-color: ${({ theme }) => theme.colors.grey100};
      font-size: ${({ theme }) => theme.fonts.guide_bold.size};
      font-weight: ${({ theme }) => theme.fonts.guide_bold.weight};
      line-height: ${({ theme }) => theme.fonts.guide_bold.lineHeight};
    }
  }

  ${IconButtonWrapper} {
    width: 3rem;
    height: 3rem;
    border-radius: ${({ theme }) => theme.radius.lg};
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const ChatMessagesWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 5rem; // WriteBoxWrapper 만큼 빼야됨!!
`;
