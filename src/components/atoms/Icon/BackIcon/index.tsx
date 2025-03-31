import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { type IIconProps, IconWrapper } from "../styled";

/**
 * 뒤로가기 아이콘
 */
export const BackIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FaArrowLeft />
    </IconWrapper>
  );
};
