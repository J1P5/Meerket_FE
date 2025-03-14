import styled from '@emotion/styled';
import { BottomNavBarWrapper } from 'components/organisms/BottomNavBar/styled';
import { HeaderWrapper } from 'components/organisms/Header/styled';
import { TopBarWrapper } from 'components/organisms/TopBar/styled';

export const PageLayoutWrapper: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
`;

export const RootLayoutWrapper: ReturnType<typeof styled.div> = styled.div`
  min-height: 100vh;
  max-width: ${({ theme }) => theme.sizes.min_width};
  max-width: ${({ theme }) => theme.sizes.max_width};

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${HeaderWrapper}, ${TopBarWrapper} {
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.zIndexes.RootLayout};
  }
  ${BottomNavBarWrapper} {
    position: sticky;
    bottom: 0;
  }
`;
