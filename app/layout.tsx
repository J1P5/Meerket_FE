import localFont from 'next/font/local'
// TODO: 네이버 맵 관련 페이지 구현 시 추가 및 테스트 필요
// import { NavermapsProvider } from 'react-naver-maps'

import './globals.css'

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* <head>
        <script
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
          defer
        />
        <script
          type="text/javascript"
          src="https://oapi.map.naver.com/openapi/v3/maps-geocoder.js"
          defer
        />
      </head> */}
      <body className={`${pretendard.className} antialiased`}>
        {/* <NavermapsProvider
          ncpClientId={process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}
          submodules={['geocoder']}
        >
          
        </NavermapsProvider> */}
        <div className="min-h-screen max-w-screen-lg mx-auto flex flex-col justify-between">
          {children}
        </div>
      </body>
    </html>
  )
}
