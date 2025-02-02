import { Text, TextButton } from "components/atoms";
import { SearchHistoryWrapper } from "./styled";
import { SearchHistoryItem } from "../SearchHistoryItem";

interface ISearchHistoryWrapperProps {
  searchTerms: string[];
  onAllDeleteButtonClick: () => void;
  onDeleteButtonClick: (idx: number) => void;
  onHistoryItemClick: (searchTerm: string) => void;
}

export const SearchHistory = ({
  searchTerms,
  onAllDeleteButtonClick,
  onDeleteButtonClick,
  onHistoryItemClick,
}: ISearchHistoryWrapperProps) => {
  return (
    <SearchHistoryWrapper>
      <div className="search-top-bar">
        <Text>최근 검색어</Text>
        <TextButton
          text={"전체 삭제"}
          onClick={onAllDeleteButtonClick}
          backgroundColor="transparent"
        />
      </div>
      {searchTerms.map((searchTerm, idx) => {
        return (
          <SearchHistoryItem
            key={idx}
            searchTerm={searchTerm}
            onDeleteButtonClick={() => onDeleteButtonClick(idx)}
            onHistoryItemClick={() => onHistoryItemClick(searchTerm)}
          />
        );
      })}
    </SearchHistoryWrapper>
  );
};
