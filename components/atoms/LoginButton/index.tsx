'use client'

import KakaoLogo from '@/public/LoginButton/kakao.svg'
import NaverLogo from '@/public/LoginButton/naver.svg'

interface ILoginButtonProps {
  /** 로그인 버튼의 타입 */
  type: 'naver' | 'kakao'
  /** 로그인 버튼 클릭 시 이벤트 */
  onClick?: () => void
}

const KakaoLoginButton = ({ onClick }: Omit<ILoginButtonProps, 'type'>) => {
  return (
    <button
      onClick={onClick}
      className="h-[3.375rem] outline-none border-0 flex justify-center items-center p-4 rounded-md text-base cursor-pointer w-full relative bg-[#fee500] text-[#191919]"
      type="button"
    >
      <KakaoLogo className="absolute left-4" />
      <span>카카오 로그인</span>
    </button>
  )
}

const NaverLoginButton = ({ onClick }: Omit<ILoginButtonProps, 'type'>) => {
  return (
    <button
      onClick={onClick}
      className="h-[3.375rem] outline-none border-0 flex justify-center items-center p-4 rounded-md text-base cursor-pointer w-full relative bg-[#03c75a] text-white"
      type="button"
    >
      <NaverLogo className="absolute left-4" />
      <span>네이버 로그인</span>
    </button>
  )
}

/**
 * 소셜 로그인 버튼
 */
export const LoginButton = ({
  type,
  onClick = () => {},
}: ILoginButtonProps) => {
  const Component = type === 'kakao' ? KakaoLoginButton : NaverLoginButton
  return <Component onClick={onClick} />
}
