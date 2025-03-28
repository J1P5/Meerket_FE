import styled from '@emotion/styled';
import { ThemeType } from 'styles/theme';
import type { ITabIndicatorProps } from './index';

export const TabIndicatorWrapper: ReturnType<
  typeof styled.div<ITabIndicatorProps>
> = styled.div<ITabIndicatorProps>`
  width: 100%;
  height: 2px;
  background-color: ${({
    isActive,
    theme,
  }: {
    isActive?: boolean;
    theme: ThemeType;
  }) =>
    isActive
      ? theme.colors.primaryDark
      : theme.colors.grey400};
`;
