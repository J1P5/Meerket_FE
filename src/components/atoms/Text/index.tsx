import type { HTMLAttributes } from 'react';
import {
  BadgeRegularWrapper,
  ButtonBoldWrapper,
  DescBoldWrapper,
  DescRegularWrapper,
  GuideBoldWrapper,
  GuideRegularWrapper,
  TagRegularWrapper,
  TitleBoldWrapper,
  TitleRegularWrapper,
  TitleSemiBoldWrapper,
  WritingBoldWrapper,
} from './styled';

export type TextVariant =
  | 'title_bold'
  | 'title_semibold'
  | 'title_regular'
  | 'desc_bold'
  | 'desc_regular'
  | 'guide_bold'
  | 'guide_regular'
  | 'tag_regular'
  | 'writing_bold'
  | 'button_bold'
  | 'badge_regular';

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  /** Text의 타입 (스타일 가이드 준수) */
  variant?: TextVariant;
  /** Text의 색깔 */
  color?: string;
}

const variantMap: {
  [key in NonNullable<ITextProps['variant']>]: React.ComponentType<
    HTMLAttributes<HTMLParagraphElement>
  >;
} = {
  title_bold: TitleBoldWrapper,
  title_semibold: TitleSemiBoldWrapper,
  title_regular: TitleRegularWrapper,
  desc_bold: DescBoldWrapper,
  desc_regular: DescRegularWrapper,
  guide_bold: GuideBoldWrapper,
  guide_regular: GuideRegularWrapper,
  tag_regular: TagRegularWrapper,
  writing_bold: WritingBoldWrapper,
  button_bold: ButtonBoldWrapper,
  badge_regular: BadgeRegularWrapper,
};

export const Text = ({
  children,
  variant = 'title_bold',
  onClick = () => {},
  color,
}: ITextProps) => {
  const Component = variantMap[variant];
  return (
    <Component onClick={onClick} color={color}>
      {children}
    </Component>
  );
};
