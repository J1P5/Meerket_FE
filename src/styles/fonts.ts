interface IFontStyle {
  size: string;
  lineHeight: string;
  weight: number;
}

type FontKey =
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

export const fonts: Record<FontKey, IFontStyle> = {
  title_bold: {
    size: '1rem',
    lineHeight: '145%',
    weight: 700,
  },
  title_semibold: {
    size: '1rem',
    lineHeight: '145%',
    weight: 600,
  },
  title_regular: {
    size: '1rem',
    lineHeight: '145%',
    weight: 400,
  },
  desc_bold: {
    size: '0.875rem',
    lineHeight: '145%',
    weight: 600,
  },
  desc_regular: {
    size: '0.875rem',
    lineHeight: '145%',
    weight: 400,
  },
  guide_bold: {
    size: '0.8125rem',
    lineHeight: '145%',
    weight: 600,
  },
  guide_regular: {
    size: '0.8125rem',
    lineHeight: '145%',
    weight: 400,
  },
  tag_regular: {
    size: '0.75rem',
    lineHeight: '145%',
    weight: 400,
  },
  writing_bold: {
    size: '1.5rem',
    lineHeight: '135%',
    weight: 600,
  },
  button_bold: {
    size: '1.0625rem',
    lineHeight: '145%',
    weight: 600,
  },
  badge_regular: {
    size: '0.6875rem',
    lineHeight: '145%',
    weight: 400,
  },
};
