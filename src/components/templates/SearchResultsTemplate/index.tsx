import { PostList } from "components/organisms";
import { IPost } from "types";
import { SearchResultsTemplateWrapper } from "./styled";
import { EmptyTemplate } from "../EmptyTemplate";

interface ISearchResultsTemplateProps {
  posts: IPost[];
  children?: React.ReactNode;
}

export const SearchResultsTemplate = ({
  posts,
  children,
}: ISearchResultsTemplateProps) => {
  return (
    <SearchResultsTemplateWrapper>
      <div className="post-con">
        {posts.length === 0
          ? <EmptyTemplate type={"search"} />
          : <PostList posts={posts} type={"default"} />}
      </div>
      {children}
    </SearchResultsTemplateWrapper>
  );
};
