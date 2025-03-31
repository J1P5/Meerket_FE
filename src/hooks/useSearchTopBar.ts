import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "components/atoms/Icon";
import { useTopBarStore } from "stores";
import { ToastInstance as Toast } from "components/atoms/Toast"; // 순환 의존 문제로 수정
/**
 * SearchTopBar가 필요한 페이지(search, searchResult)에서 사용하는 hook
 * @param value searchTerm의 기본 값 (default: "")
 */
export const useSearchTopBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchBar, setRightIcon } = useTopBarStore();
  /**
   * 검색 페이지로 이동하는 함수
   */
  const handleSearch = useCallback(
    () => {
      if (!searchTerm.trim()) {
        Toast.show("검색어를 입력해주세요.", 2000);
        return;
      }

      navigate(`/search/keyword/${encodeURIComponent(searchTerm)}`, {
        replace: location.pathname !== "/search",
      });
    },
    [searchTerm, navigate]
  );

  useEffect(
    () => {
      setRightIcon(SearchIcon, handleSearch);
      setSearchBar(searchTerm, setSearchTerm, "검색어를 입력해주세요.", handleSearch);
    },
    [searchTerm]
  );

  return {
    setSearchTerm,
  };
};
