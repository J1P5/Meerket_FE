/* eslint-disable @rushstack/typedef-var */
import { useState } from "react";
import styled from "@emotion/styled";
import { IPost, PostList } from "components/organisms/PostList";
import { ThemeType } from "styles/theme";
import { Text } from "components/atoms";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import { PostItemRootWrapper } from "components/organisms/PostItem/styled";

export const TopSheetWrapper = styled.div``;
const TopSheetContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "9.72rem" : "0")};
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.white};
  overflow: hidden;
  transition: height 0.3s ease; /* 부드러운 애니메이션 */

  ${TextButtonWrapper} {
    margin: 0;
  }

  ${PostItemRootWrapper} {
    padding-bottom: 0;
  }
`;

const ToggleButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  height: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pading: 0;
  gap: 5px;
  border-radius: 0 0 0.625rem 0.625rem;

  top: ${({ isOpen }) => (isOpen ? "9.72rem" : "0px")};
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.white};
  border: none;

  cursor: pointer;
  z-index: 1000;
  transition: top 0.3s ease; /* 버튼 위치 애니메이션 */

  .btn-bar {
    width: 100px;
    height: 6px;
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.colors.grey_button_deactivate};
    border-radius: 100px;
  }
`;

interface TopSheetProps {
  post: IPost;
}
export const TopSheet = ({ post }: TopSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <TopSheetWrapper>
      <ToggleButton onClick={toggleSheet} isOpen={isOpen}>
        {isOpen ? "" : <Text content={post.title} variant="tag_regular"></Text>}
        <div className="btn-bar"></div>
      </ToggleButton>
      <TopSheetContainer isOpen={isOpen}>
        <PostList posts={[post]} type={"chat"}></PostList>
      </TopSheetContainer>
    </TopSheetWrapper>
  );
};