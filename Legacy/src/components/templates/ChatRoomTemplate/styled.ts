import styled from '@emotion/styled';

export const ChatRoomTemplateWrapper: ReturnType<typeof styled.div> =
  styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${({ theme }) => theme.colors.grey100};

    padding-top: 3rem;
  `;
