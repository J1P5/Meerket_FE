import styled from '@emotion/styled';

export const BadgeWrapper: ReturnType<typeof styled.div> = styled.div`
  width: fit-content;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.grey200};
  border-radius: ${({ theme }) => theme.radius.xl};
`;

export const BadgeChatWrapper: ReturnType<typeof styled.div> = styled.div`
  //23px = 1.4375rem , 3자리일때도 있을 수 있어서 여유롭게 23px로 잡았습니다.
  width: 1.4375rem; /* 배지의 너비 */
  height: 1.4375rem; /* 배지의 높이 */
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.round};
`;
