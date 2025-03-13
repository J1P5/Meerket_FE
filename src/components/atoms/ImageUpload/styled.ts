import styled from '@emotion/styled';

export const ImageUploadWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 100%;
  height: 100%;
  input[type='file'] {
    cursor: pointer;
    width: 100%;
    height: 100%;
    opacity: 0;
    &::file-selector-button {
      display: none;
    }
  }
`;
