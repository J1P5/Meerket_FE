import { LoginButton, Logo, Text } from "components/atoms";
import { LoginButtonWrapper, LoginTemplateWrapper } from "./styled";
import { WELL_COME_PAGE_TEXT } from "constants/Login";

interface IComponentProps {
  /** 네이버 로그인 버튼 클릭 */
  onNaverLoginClick: () => void;
  /** 카카오 로그인 버튼 클릭 */
  onKakaoLoginClick: () => void;
}

export const LoginTemplate = ({
  onNaverLoginClick,
  onKakaoLoginClick,
}: IComponentProps) => {
  return (
    <LoginTemplateWrapper>
      <Text variant="h5" content={WELL_COME_PAGE_TEXT} />
      <Logo />
      <LoginButtonWrapper>
        <LoginButton type="naver" onClick={onNaverLoginClick} />
        <LoginButton type="kakao" onClick={onKakaoLoginClick} />
      </LoginButtonWrapper>
    </LoginTemplateWrapper>
  );
};
