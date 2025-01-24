import { LoginTemplate } from "components/templates";
import { Outlet } from "react-router-dom";
import { requestOAuthLogin } from "services/apis";

const LoginPage = () => {
  /**
   * 카카오 로그인 버튼 클릭 이벤트 핸들러
   */
  const handleKakaoLoginClick = () => {
    requestOAuthLogin("KAKAO");
  };

  /**
   * 네이버 로그인 버튼 클릭 이벤트 핸들러
   */
  const handleNaverLoginClick = () => {
    requestOAuthLogin("NAVER");
  };
  // 콜백 경로일 경우 로그인 템플릿을 보여주지 않음
  if (location.pathname.includes("/callback")) {
    return <Outlet />;
  }
  console.log("LCP 관련 router.tsx 0554");
  return (
    <>
      <LoginTemplate
        onKakaoLoginClick={handleKakaoLoginClick}
        onNaverLoginClick={handleNaverLoginClick}
      />
      <Outlet />
    </>
  );
};

export default LoginPage;
