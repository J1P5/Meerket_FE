import styled from '@emotion/styled';
import { IIconButtonProps } from '.';

export const IconButtonWrapper: ReturnType<
  typeof styled.button<
    Pick<IIconButtonProps, 'backgroundColor'> & {
      shape: IIconButtonProps['type'];
    }
  >
> = styled.button<
  Pick<IIconButtonProps, 'backgroundColor'> & {
    shape: IIconButtonProps['type'];
  }
>`
  // 버튼 스타일 초기화
  outline: none;
  border: none;

  // width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;
  border-radius: ${({ shape, theme }) =>
    shape === 'square' ? theme.radius.xl : theme.radius.round};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor === 'transparent' ? 'transparent' : theme.colors.grey200};

  cursor: pointer;
`;
