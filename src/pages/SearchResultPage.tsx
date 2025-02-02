import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { useSearchTopBar } from "hooks";
import { getCategoryPosts, getKeywordPosts } from "services/apis/post";
import { ISearchPost } from "types";
import { IPost } from "components/organisms/PostList";
import { Loading } from "components/molecules/Loading";
import { SearchResultsTemplate } from "components/templates";
import { CATEGORIES } from "constants/categories";
import { queries } from "constants/queryKeys";
import { SEARCH_NAVIGATE_URL, SEARCH_LOADING_MESSAGE } from "constants/SearchResultPageConstants";

const SearchResultPage = () => {
  const queryClient = useQueryClient();

  useEffect(
    () => {
      return () => {
        // 언마운트 시 캐시 제거
        queryClient.removeQueries({ queryKey: [queries.searchResult.DEFAULT, term] });
      };
    },
    [queryClient]
  );

  /** 1. 초기 카테고리, 검색 키워드 세팅  */
  const { category, keyword } = useParams<{
      category?: string;
      keyword?: string;
  }>();
  const { setSearchTerm } = useSearchTopBar();
  const term = category || keyword!;

  useEffect(()=>{
    setSearchTerm(keyword || CATEGORIES.find(item => item.code === category)!.name);
  },[category, keyword, setSearchTerm])

  /** 2. 키워드 검색결과 관련 함수   */
  const navigate = useNavigate();
  /** 백엔드 IHomePost 타입을 프론트 IPost 으로 변환 함수
   * @param searchPost : ISearchPost
   * @returns IPost
   */
  const createSearchPostItem = (searchPost: ISearchPost): IPost => ({
    /** 게시글 ID */
    productId: searchPost.productId,
    /** 게시글 썸네일 이미지 */
    imgUrl: searchPost.image,
    /** 게시글 제목 */
    title: searchPost.title,
    /** 게시글 가격 */
    price: searchPost.price,
    /** 게시글 등록된 주소 */
    address: searchPost.address,
    /** 게시글 등록된 시간 */
    uploadTime: searchPost.uploadTime,
    /** 남은 시간 */
    expiredTime: searchPost.expiredTime,
    /** 판매자 : 최고 입찰가, 구매자 : 나의 입찰가  */
    maxPrice: -1,
    /** 게시글 아이템 클릭 이벤트
     * 해당 페이지로 이동하게 로직 변경
     */
    onClick: () => {
      /** 상세 페이지로 이동 */
      navigate(SEARCH_NAVIGATE_URL + `/${searchPost.productId}`);
    },
    /** 판매중 : 끌어올리기, 완료 : 받은 후기 보기
     * 홈 화면에는 필요없는 함수
     */
    onTextButtonClick: () => {},
    /** 아이콘 버튼 클릭 이벤트
     * 홈 화면에는 필요 없는 함수
     */
    onIconButtonClick: () => {},
  });

  const {
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [queries.searchResult.DEFAULT, term],
    queryFn: ({ pageParam = undefined }: { pageParam: number | undefined }) => !!category ? getCategoryPosts(pageParam, term) : getKeywordPosts(pageParam, term),
    getNextPageParam: lastPage => lastPage.result.nextCursor,
    initialPageParam: undefined,
    select: (data) => ({
      pages: data.pages.flatMap(page =>
        page.result.content.map(createSearchPostItem)
      ),
    }),
    enabled: !!term,
  });

  const { ref, inView } = useInView({
    rootMargin: "400px",
  });

  useEffect(
    () => {
      if (inView) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchNextPage();
      }
    },
    [inView]
  );

  if (isLoading) {
    return <Loading message={SEARCH_LOADING_MESSAGE} />;
  }

  return (
    <SearchResultsTemplate posts={data?.pages as IPost[] || [] }>
      {!isFetchingNextPage && <div ref={ref} />}
    </SearchResultsTemplate>
  );
};

export default SearchResultPage;
