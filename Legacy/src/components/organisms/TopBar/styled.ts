import styled from '@emotion/styled';
import { IconButtonWrapper } from 'components/atoms/Button/IconButton/styled';
import { NoIconWrapper } from 'components/atoms/Icon/NoIcon/styled';
import { InputWrapper } from 'components/atoms/Input/styled';
import { TitleRegularWrapper } from 'components/atoms/Text/styled';

const CommonIconWrapper: ReturnType<typeof styled.div> = styled.div``;
export const TopBarBackIconWrapper: typeof CommonIconWrapper = styled(
  CommonIconWrapper,
)``;
export const TopBarIconWrapper: typeof CommonIconWrapper = styled(
  CommonIconWrapper,
)`
  ${IconButtonWrapper}:has(${NoIconWrapper}) {
    cursor: default;
  }
`;

export const TopBarWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  // 19px = 1.1875rem
  padding: 1.1875rem 1rem;
  gap: 0.5rem;
  & > ${TitleRegularWrapper} {
    flex: 1;
    padding: 0.5rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
  }
  & > ${InputWrapper} {
    flex: 1;
    // 적용 안되고있는 속성이라 주석처리했습니다!
    // height: 19/16rem;
    // padding: 15.5/16rem 1rem;
    background-color: ${({ theme }) => theme.colors.grey200};
  }
  &:has(${InputWrapper}) ${TopBarIconWrapper} {
    position: absolute;
    right: 1.5rem;
  }
`;
