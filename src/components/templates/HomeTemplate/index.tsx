import { TextButton } from "components/atoms";
import { HomeTemplateWrapper } from "./styled";
import { PostList } from "components/organisms";
import { EmptyTemplate } from "../EmptyTemplate";
import { IPost } from "types";

interface IHomeTemplateProps {
  posts: IPost[];
  onClick?: () => void;
  children?: React.ReactNode;
}

export const HomeTemplate = ({ posts, onClick, children }: IHomeTemplateProps) => {
  const textBtnContent = "내 물건 판매하기";
  return (
    <HomeTemplateWrapper>
      <div className="post-con">
        {posts.length === 0 ? (
          <EmptyTemplate type={"default"}></EmptyTemplate>
        ) : (
          <PostList posts={posts} type={"default"}></PostList>
        )}
      </div>
      {children}
      <TextButton text={textBtnContent} onClick={onClick} size="m"></TextButton>
    </HomeTemplateWrapper>
  );
};
