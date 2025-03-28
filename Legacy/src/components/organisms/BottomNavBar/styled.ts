import styled from '@emotion/styled';
import { NavBarItemWrapper } from 'components/molecules/NavBarItem/styled';

export const BottomNavBarWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  height: 74px;
  padding-top: 20px;
  ${NavBarItemWrapper} {
    flex: 1;
  }
`;
