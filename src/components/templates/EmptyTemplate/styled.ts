import styled from "@emotion/styled";
import { ThemeType } from "styles/theme";

export const EmptyTemplateWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;
  max-width: ${({ theme }: { theme: ThemeType }) => theme.sizes.max_width};
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.white};

  &.error {
    height: 100vh;
  }
`;

export const TextContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 1.5rem;
  text-align: center;
  white-space: break-spaces;
  height: 100%;
`;

export const LogoWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 8rem;
`;
