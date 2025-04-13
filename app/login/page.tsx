'use client'

import { useEffect } from 'react'

import { requestOAuthLogin } from '@/apis'
import { LoginTemplate } from '@/components/templates'

export default function LoginPage() {
  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        await Notification.requestPermission()
      } catch (error) {
        // TODO: 여기서 console 못쓰면 어떤 에러 처리를 바라는 건지..?
        // eslint-disable-next-line no-console
        console.error('알림 권한 요청 중 오류 발생:', error)
      }
    }
    requestNotificationPermission()
  }, [])
  /**
   * 카카오 로그인 버튼 클릭 이벤트 핸들러
   */
  const handleKakaoLoginClick = () => {
    requestOAuthLogin('KAKAO')
  }

  /**
   * 네이버 로그인 버튼 클릭 이벤트 핸들러
   */
  const handleNaverLoginClick = () => {
    requestOAuthLogin('NAVER')
  }

  return (
    <LoginTemplate
      onKakaoLoginClick={handleKakaoLoginClick}
      onNaverLoginClick={handleNaverLoginClick}
    />
  )
}
