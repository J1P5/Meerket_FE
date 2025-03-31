import { LoginTemplate } from "components/templates";
import { Outlet } from "react-router-dom";
import { requestOAuthLogin } from "services/apis";
import { useNotification } from "hooks";

const LoginPage = () => {
  const { getFcmToken } = useNotification();

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

  getFcmToken().catch(()=>{
    console.error("토큰 발급 실패")
  })

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
