import { Text } from 'components/atoms';
import { IconType } from 'types/icon';
import { IconWithTextWrapper } from './styled';
export interface IIconWithTextProps {
  /** 아이콘 컴포넌트 : atoms/Icon 경로 참조 */
  icon: IconType;
  /** Text 내용 */
  content: string;
  /** 부가설명 내용(권한 설정 화면) */
  desc?: string;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** 아이콘 위치 ,default는 왼쪽 */
  iconLocation?: 'default' | 'right';
}

// TODO: Text variant 필요
export const IconWithTextLegacy = ({
  icon,
  content,
  desc,
  onClick,
  iconLocation = 'default',
}: IIconWithTextProps) => {
  const IconComponent = icon;
  return (
    <IconWithTextWrapper
      icon={icon}
      content={content}
      desc={desc}
      onClick={onClick}
      iconLocation={iconLocation}
    >
      <IconComponent />
      <div className="text-con">
        <Text variant="title_bold">{content}</Text>
        {desc && <Text variant="desc_regular">{desc}</Text>}
      </div>
    </IconWithTextWrapper>
  );
};
