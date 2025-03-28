import { type IIconProps, IconWrapper } from "../styled";
import { FiBell } from "@react-icons/all-files/fi/FiBell";

/**
 * 알림 아이콘
 */
export const NotificationIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiBell />
    </IconWrapper>
  );
};
