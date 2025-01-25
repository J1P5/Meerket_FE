import { Text, TextButton } from "components/atoms";
import { IconWithText } from "components/molecules";
import { PermissionListWrapper } from "./styled";
import { IconType } from "types";

export interface IPermission {
  icon: IconType;
  content: string;
  desc: string;
}
interface IPermissionListProps {
  /** 권한 리스트 */
  permissions: IPermission[];
  /** 확인 버튼 클릭 이벤트 */
  onClick: () => void;
}

export const PermissionList = ({
  permissions,
  onClick,
}: IPermissionListProps) => {
  return (
    <PermissionListWrapper>
      <Text variant="h5">
        {"미어켓 이용을 위해\n 앱 권한을 허용해주세요"}
      </Text>
      <div className="permission-con">
        {permissions.map((permission, idx) => {
          return (
            <IconWithText key={idx}>
              <IconWithText.Icon icon={permission.icon} />
              <IconWithText.Content
                content={permission.content}
                desc={permission.desc}
              />
            </IconWithText>
          );
        })}
      </div>
      <TextButton text={"확인"} onClick={onClick} />
    </PermissionListWrapper>
  );
};
