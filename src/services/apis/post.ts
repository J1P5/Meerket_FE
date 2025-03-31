import { http } from "services/api";
import type {
  ISearchPostResponse,
} from "types";
import { SEARCH_CATEGORY_API_URL, SEARCH_KEYWORD_API_URL } from 'constants/SearchResultPageConstants'


  /** userId를 기반으로 특정 카테고리에 대한 post 목록을 가져오는 함수
   * @param void
   */
  export const getCategoryPosts = async (pageParam: number | undefined, category: string ) => {
    return http.get<ISearchPostResponse, { cursor: number | undefined, size: number }>(
      `${SEARCH_CATEGORY_API_URL}?category=${category}`,
      { cursor: pageParam, size: 10 }
    );
  };


  /** userId를 기반으로 특정 키워드에 대한 post 목록을 가져오는 함수
   * @param void
   */
  export const getKeywordPosts = async (pageParam: number | undefined, keyword: string ) => {
    return http.get<ISearchPostResponse, { cursor: number | undefined, size: number }>(
      `${SEARCH_KEYWORD_API_URL}?keyword=${keyword}`,
      { cursor: pageParam, size: 10 }
    );
  };
    
