import styled from '@emotion/styled';

export const PostListWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;

  .price-con {
    p {
      color: ${({ theme }) => theme.colors.grey500};
    }
  }
  .remain-con {
    p {
      color: ${({ theme }) => theme.colors.grey500};
    }
  }

  .max-price-con {
    display: flex;
    justify-content: flex-end;
    gap: 0.25rem;
  }

  .location-con {
    p {
      color: ${({ theme }) => theme.colors.grey500};
    }
  }
`;
