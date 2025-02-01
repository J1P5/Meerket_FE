import { useEffect } from "react";
import { NeighborhoodSelectionTemplate } from "components/templates";
import { useTopBarStore } from "stores";
import { SearchIcon } from "components/atoms/Icon";
import { useNeighborhoodSelection } from "hooks";

const NeighborhoodSelectionPage = () => {
  const { setSearchBar, setRightIcon } = useTopBarStore();
  const {
    term,
    setTerm,
    neighborhoods,
    handleGetMyNeighborhood,
    handleSearchNeighborhoods,
    handleClickNeighborhood,
  } = useNeighborhoodSelection();

  useEffect(() => {
    setSearchBar(
      term,
      setTerm,
      "동네를 입력해주세요.",
      handleSearchNeighborhoods,
    );
  }, [term]);

  useEffect(() => {
    setRightIcon(SearchIcon, handleSearchNeighborhoods);
  }, [handleSearchNeighborhoods]);

  return (
    <>
      <NeighborhoodSelectionTemplate
        neighborhoods={neighborhoods}
        onNeighborhoodClick={handleClickNeighborhood}
        onFindCurrentLocationClick={handleGetMyNeighborhood}
      />
    </>
  );
};

export default NeighborhoodSelectionPage;