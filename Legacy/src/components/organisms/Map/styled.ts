import styled from '@emotion/styled';
import { IconButtonWrapper } from 'components/atoms/Button/IconButton/styled';
import { ImageWrapper } from 'components/atoms/Image/styled';

export const MapWrapper: ReturnType<typeof styled.div> = styled.div`
  top:0;
  left:0;
  width: 100%;
  height: 80vh;


  ${IconButtonWrapper} {
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    width: 50px;
    height: 50px;
    background: ${({ theme }) => theme.colors.white};
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.lg};
    color: ${({ theme }) => theme.colors.primary};
  }
}
`;

export const CenterMarkerWrapper: ReturnType<typeof styled.div> = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(
    -50%,
    -85%
  ); // 마커라서 위치 조정 (위경도가 100% 정확하지는 않음)
  pointer-events: none;

  ${ImageWrapper} {
    width: 40px;
    height: 40px;
  }
`;
