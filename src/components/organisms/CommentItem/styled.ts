import styled from '@emotion/styled';
import { IconButtonWrapper } from 'components/atoms/Button/IconButton/styled';

import { BadgeWrapper } from 'components/atoms/Badge/styled';
import { IconWrapper } from 'components/atoms/Icon/styled';
import { ImageWrapper } from 'components/atoms/Image/styled';
import {
  DescRegularWrapper,
  TitleBoldWrapper,
} from 'components/atoms/Text/styled';
import { KebabMenuWrapper } from 'components/molecules/KebabMenu/styled';

/**
 * 케밥메뉴
 */
export const KebabWrapper: ReturnType<typeof styled.div> = styled.div`
  ${KebabMenuWrapper} {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: ${({ theme }) => theme.zIndexes.KebabMenu};
  }
`;

/**
 * 댓글 Header
 */
export const CommentHeaderContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  align-items: center;
  gap: ${12 / 16}rem;
  ${ImageWrapper} {
    width: 50px;
  }
  ${TitleBoldWrapper} {
    color: ${({ theme }) => theme.colors.grey600};
  }
  ${DescRegularWrapper} {
    color: ${({ theme }) => theme.colors.grey500};
  }
  ${IconButtonWrapper} {
    color: ${({ theme }) => theme.colors.grey400};
  }
`;

/**
 * 댓글 작성자 / 작성 시간
 */
export const WriterInformationWrapper: ReturnType<typeof styled.div> =
  styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `;

export const WriterBadgeWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  align-items: center;
  gap: ${6 / 16}rem;
  ${BadgeWrapper} {
    font-size: ${({ theme }) => theme.fonts.tag_regular.size};
    font-weight: ${({ theme }) => theme.fonts.tag_regular.weight};
    line-height: ${({ theme }) => theme.fonts.tag_regular.lineHeight};
    color: ${({ theme }) => theme.colors.primaryDark};
    background-color: ${({ theme }) => theme.colors.grey200};
    border-radius: ${({ theme }) => theme.radius.sm};
    padding: ${3 / 16}rem ${6 / 16}rem;
  }
`;

/**
 * 댓글 내용
 */
export const CommentContentWrapper: ReturnType<typeof styled.div> = styled.div`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.grey600};
`;

/**
 * 답글
 */
export const ReplyCommentWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  padding: 1rem 0 1rem 1rem;
  ${IconWrapper} {
    color: ${({ theme }) => theme.colors.grey400};
  }

  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.grey100};
  }
`;

/**
 * 답글 목록 Container
 */
export const ReplyCommentContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * 답글 + 답글 작성 Container
 */
export const ReplyContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * 댓글
 */
export const CommentItemWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${10 / 16}rem;
  position: relative;
  padding-left: 1rem;
  &.deleted,
  &.blocked {
    color: ${({ theme }) => theme.colors.grey400};
  }
`;

/**
 * 전체
 */
export const CommentItemContainer: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
