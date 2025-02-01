import React from "react";
import { Text } from "components/atoms";
import { IconWithText } from "components/molecules";
import { NeighborhoodSelectionListWrapper } from "./styled";
import { LocationIcon } from "components/atoms/Icon";

interface INeighborhoodSelectionListrops {
  /** 동네 리스트 */
  neighborhoods: string[];
  /** 동네 클릭 이벤트 */
  onClick: (neighborhood: string) => void;
}

const baseNeighborhoodSelectionList = ({
  neighborhoods,
  onClick,
}: INeighborhoodSelectionListrops) => {
  return (
    <NeighborhoodSelectionListWrapper>
      <Text variant="title_bold">근처동네</Text>

      {neighborhoods.map((neighborhood, idx) => {
        return (
          <IconWithText key={idx} onClick={() => onClick(neighborhood)}>
            <IconWithText.Icon icon={LocationIcon} size={"s"} />
            <IconWithText.Content
              content={neighborhood}
              contentVariant={"title_semibold"}
            />
          </IconWithText>
        );
      })}

      {/* 
      // <TextDividerList
      //   items={neighborhoods}
      //   onClick={onClick}
      // ></TextDividerList> */}
    </NeighborhoodSelectionListWrapper>
  );
};

export const NeighborhoodSelectionList = React.memo(
  baseNeighborhoodSelectionList
);
