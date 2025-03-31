import styled from '@emotion/styled';

export const ImageUploadWrapper: ReturnType<typeof styled.div> = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-radius: ${({ theme }) => theme.radius.lg};

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.black}22`};
  }
`;

export const UploadedImageCounterContainer: ReturnType<typeof styled.div> =
  styled.div`
    background-color: ${({ theme }) => theme.colors.grey100};
    text-align: center;
    padding: 1rem;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  `;
