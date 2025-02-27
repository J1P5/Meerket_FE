import { useEffect } from "react";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams
} from "react-router-dom";
import { oauthLogin } from "services/apis";
import { useUserStore } from "stores";
import type { OAuthProvider } from "types";


const OAuthCallbackPage = () => {
  // TODO 직접 접근 막기
  const navigate = useNavigate();
  const { provider } = useParams<{ provider: Lowercase<OAuthProvider> }>();
  const { setUser } = useUserStore();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      const fcmToken = localStorage.getItem("fcmToken") || "";
      oauthLogin({ code, provider: provider!.toUpperCase() as OAuthProvider, fcmToken })
        .then((data) => {
          const { result } = data;
          setUser({
            profile: result.profileUrl || undefined,
            nickname: result.nickname || undefined,
            emdName: result.emdName || undefined,
            emdId: result.emdId || undefined
          });

          navigate("/", { replace: true });
        })
        .catch(console.error);
    }
  }, []);

  if (!code) {
    // code 없는경우 로그인페이지로 리다이렉트
    return <Navigate to="/login" replace />;
  }

  return null;
};

export default OAuthCallbackPage;