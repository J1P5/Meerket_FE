import { type IIconProps, IconWrapper } from "../styled";
import { FiClock } from "@react-icons/all-files/fi/FiClock";

/**
 * 히스토리 아이콘 (검색기록)
 */
export const HistoryIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiClock />
    </IconWrapper>
  );
};
