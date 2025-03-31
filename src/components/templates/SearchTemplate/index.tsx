import { TextButton } from "components/atoms";
import { SearchTemplateWrapper } from "./styled";
import { SearchHistory } from "components/organisms";
import React from "react";

interface ISearchTemplateProps {
  /** 최근 검색어 리스트 */
  searchTerms: string[];
  /** 카테고리 버튼 클릭 이벤트 */
  onCategoryBtnClick: () => void;
  /** 전체 삭제 버튼 클릭 이벤트 */
  onAllDeleteButtonClick: () => void;
  /** 아이템의 X 버튼 클릭 이벤트 */
  onDeleteButtonClick: (idx: number) => void;
  /** 최근 검색어 각 항목 클릭 이벤트 */
  onHistoryItemClick: (searchTerm: string) => void;
}

const baseSearchTemplate = ({
  searchTerms,
  onCategoryBtnClick,
  onAllDeleteButtonClick,
  onDeleteButtonClick,
  onHistoryItemClick,
}: ISearchTemplateProps) => {
  const categoryBtnText = "카테고리로 검색하기";
  return (
    <SearchTemplateWrapper>
      <TextButton text={categoryBtnText} onClick={onCategoryBtnClick} />
      {searchTerms.length !== 0 &&
        <SearchHistory
          searchTerms={searchTerms}
          onAllDeleteButtonClick={onAllDeleteButtonClick}
          onDeleteButtonClick={onDeleteButtonClick}
          onHistoryItemClick={onHistoryItemClick}
        />}
    </SearchTemplateWrapper>
  );
};

export const SearchTemplate = React.memo(baseSearchTemplate);
