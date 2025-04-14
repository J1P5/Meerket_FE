'use client'

import { useRouter } from 'next/navigation'
import { use, useEffect } from 'react'

import { oauthLogin } from '@/apis'
import { OAuthProvider } from '@/types'
import { getFcmToken } from '@/utils'

interface OAuthCallbackPageProps {
  params: Promise<{ provider: string }>
  searchParams: Promise<{
    code?: string
    error?: string
    error_description?: string
    state?: string
  }>
}

export default function OAuthCallbackPage({
  params,
  searchParams,
}: OAuthCallbackPageProps) {
  const router = useRouter()
  const { provider } = use(params)
  const { code } = use(searchParams)

  useEffect(() => {
    if (!code) {
      router.replace('/login')
      return
    }

    const handleOAuthLogin = async () => {
      try {
        const fcmToken = await getFcmToken()
        await oauthLogin({
          code,
          provider: provider.toUpperCase() as OAuthProvider,
          fcmToken,
        })
        router.replace('/')
      } catch {
        router.replace('/login')
      }
    }

    handleOAuthLogin()
  }, [code, provider, router])

  // TODO: 로그인 중이라는 것을 의미하는 로딩 스피너를 추가해야할지 논의
  return null
}
