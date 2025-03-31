import { type IIconProps, IconWrapper } from "../styled";
import { FiPlus } from "@react-icons/all-files/fi/FiPlus";

/**
 * + 아이콘
 */
export const PlusIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiPlus />
    </IconWrapper>
  );
};
