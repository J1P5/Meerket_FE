import styled from '@emotion/styled';
import { TextButtonWrapper } from 'components/atoms/Button/TextButton/styled';
import { InputWrapper } from 'components/atoms/Input/styled';
import { TitleBoldWrapper } from 'components/atoms/Text/styled';
import { InputWithButtonWrapper } from 'components/molecules/InputWithButton/styled';
import {
  CommentItemContainer,
  CommentItemWrapper,
} from '../CommentItem/styled';

export const CommentListWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > ${CommentItemContainer} {
    & > ${CommentItemWrapper} {
      &.deleted {
        padding: 1rem;
      }
    }
  }
`;

export const CommentWriteBoxWrapper: ReturnType<typeof styled.div> = styled.div`
  ${InputWrapper} {
    flex: 1;
  }
`;

export const CommentWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  & > ${TitleBoldWrapper} {
    padding: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  ${InputWithButtonWrapper} {
    padding: 0.5rem 1rem;
    ${InputWrapper} {
      font-size: ${({ theme }) => theme.fonts.desc_regular.size};
      line-height: ${({ theme }) => theme.fonts.desc_regular.weight};
      font-weight: ${({ theme }) => theme.fonts.desc_regular.lineHeight};
      color: ${({ theme }) => theme.colors.grey600};
      background-color: ${({ theme }) => theme.colors.grey100};
    }
    ${TextButtonWrapper} {
      margin: 0;
      flex-shrink: 0;
      width: 3rem;
      height: 3rem;
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;
