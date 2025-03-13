import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

const commonStyles: SerializedStyles = css`
  letter-spacing: -2.5%;
  white-space: pre-line;

  & strong {
    font-weight: bold;
  }
`;

/** 테마 적용  line-height 가 겹치는 부분이 많은데 이후에 유지 보수 쉽게 하기 위해 이런 형태로 구성하였습니다.*/
export const TitleBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.title_bold.size};
  font-weight: ${({ theme }) => theme.fonts.title_bold.weight};
  line-height: ${({ theme }) => theme.fonts.title_bold.lineHeight};
`;

export const TitleSemiBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.title_semibold.size};
  font-weight: ${({ theme }) => theme.fonts.title_semibold.weight};
  line-height: ${({ theme }) => theme.fonts.title_semibold.lineHeight};
`;

export const TitleRegularWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.title_regular.size};
  font-weight: ${({ theme }) => theme.fonts.title_regular.weight};
  line-height: ${({ theme }) => theme.fonts.title_regular.lineHeight};
`;

export const DescBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.desc_bold.size};
  font-weight: ${({ theme }) => theme.fonts.desc_bold.weight};
  line-height: ${({ theme }) => theme.fonts.desc_bold.lineHeight};
`;

export const DescRegularWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.desc_regular.size};
  font-weight: ${({ theme }) => theme.fonts.desc_regular.weight};
  line-height: ${({ theme }) => theme.fonts.desc_regular.lineHeight};
`;

export const GuideBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.guide_bold.size};
  font-weight: ${({ theme }) => theme.fonts.guide_bold.weight};
  line-height: ${({ theme }) => theme.fonts.guide_bold.lineHeight};
`;

export const GuideRegularWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.guide_regular.size};
  font-weight: ${({ theme }) => theme.fonts.guide_regular.weight};
  line-height: ${({ theme }) => theme.fonts.guide_regular.lineHeight};
`;

export const TagRegularWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.tag_regular.size};
  font-weight: ${({ theme }) => theme.fonts.tag_regular.weight};
  line-height: ${({ theme }) => theme.fonts.tag_regular.lineHeight};
`;

export const WritingBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.writing_bold.size};
  font-weight: ${({ theme }) => theme.fonts.writing_bold.weight};
  line-height: ${({ theme }) => theme.fonts.writing_bold.lineHeight};
`;

export const ButtonBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.button_bold.size};
  font-weight: ${({ theme }) => theme.fonts.button_bold.weight};
  line-height: ${({ theme }) => theme.fonts.button_bold.lineHeight};
`;

export const BadgeRegularWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ theme }) => theme.fonts.badge_regular.size};
  font-weight: ${({ theme }) => theme.fonts.badge_regular.weight};
  line-height: ${({ theme }) => theme.fonts.badge_regular.lineHeight};
`;
