import { LoginButton } from '@/components/atoms'
import { WELCOME_PAGE_TEXT } from '@/constants'
import Logo from '@/public/Logo.svg'

interface IComponentProps {
  /** 네이버 로그인 버튼 클릭 */
  onNaverLoginClick: () => void
  /** 카카오 로그인 버튼 클릭 */
  onKakaoLoginClick: () => void
}

export const LoginTemplate = ({
  onNaverLoginClick,
  onKakaoLoginClick,
}: IComponentProps) => {
  return (
    <div className="flex flex-col justify-between flex-1 pt-8 px-4 pb-4">
      <p className="text-[var(--color-black)] text-[1rem] font-bold leading-[145%]">
        {WELCOME_PAGE_TEXT}
      </p>
      <Logo className="self-center w-32 md:w-40" />
      <div className="flex flex-col gap-2 mt-12 w-full">
        <LoginButton type="naver" onClick={onNaverLoginClick} />
        <LoginButton type="kakao" onClick={onKakaoLoginClick} />
      </div>
    </div>
  )
}
