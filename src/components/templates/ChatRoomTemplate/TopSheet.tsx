/* eslint-disable @rushstack/typedef-var */
import styled from '@emotion/styled';
import { Text } from 'components/atoms';
import { TextButtonWrapper } from 'components/atoms/Button/TextButton/styled';
import { PostList } from 'components/organisms';
import { PostItemRootWrapper } from 'components/organisms/PostItem/styled';
import { memo, useState } from 'react';

import { IPost } from 'types';

/** 시간이 촉박해서 임시로 제작한 TopSheet 입니다. 현재는 채팅쪽에서만 사용할 수 있습니다.  */

interface TopSheetWrapperProps {
  isSeller: boolean;
  isOpen: boolean;
}

export const TopSheetWrapper = styled.div``;
const TopSheetContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.max_width};
  left: 50%;
  transform: translate(-50%);

  height: ${({ isOpen, isSeller }: TopSheetWrapperProps) =>
    isSeller ? (isOpen ? '11.25rem' : '0') : isOpen ? '7.6243751rem' : '0'};
  overflow: hidden;
  //overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')}; /* 변경 */
  z-index: ${({ theme }) => theme.zIndexes.TopSheet};
  background-color: ${({ theme }) => theme.colors.white};

  transition: height 0.3s ease; /* 부드러운 애니메이션 */
  ${TextButtonWrapper} {
    margin: 0;
  }

  ${PostItemRootWrapper} {
    padding-bottom: ${({ isSeller }) => (isSeller ? '0' : '1rem')};
  }
`;

const ToggleButton = styled.button<TopSheetWrapperProps>`
  position: fixed;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.max_width};
  left: 50%;
  transform: translate(-50%);
  height: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 5px;
  border-radius: 0 0 10px 10px;

  top: ${({ isOpen, isSeller }) =>
    isSeller
      ? isOpen
        ? '15.7725rem'
        : '4.77375rem'
      : isOpen
        ? '12.398125rem'
        : '4.77375rem'};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;

  cursor: pointer;
  // TODO: z-index 왜 있는건지?
  z-index: ${({ theme }) => theme.zIndexes.TopSheet};
  transition: top 0.3s ease; /* 버튼 위치 애니메이션 */

  .btn-bar {
    width: 100px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.grey100};
    border-radius: ${({ theme }) => theme.radius.xl};
  }
`;

interface TopSheetProps {
  post: IPost;
  isCompleted: boolean;
}

export const TopSheet: React.FC<TopSheetProps> = memo(
  ({ post, isCompleted }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSheet = () => {
      setIsOpen((prev) => !prev);
    };
    return (
      <TopSheetWrapper>
        <ToggleButton
          onClick={toggleSheet}
          isOpen={isOpen}
          isSeller={post.isSeller || false}
        >
          {!isOpen && <Text variant="tag_regular">{post.title}</Text>}
          <div className="btn-bar" />
        </ToggleButton>
        <TopSheetContainer isOpen={isOpen} isSeller={post.isSeller || false}>
          <PostList posts={[post]} type={'chat'} isCompleted={isCompleted} />
        </TopSheetContainer>
      </TopSheetWrapper>
    );
  },
);

TopSheet.displayName = 'TopSheet';
