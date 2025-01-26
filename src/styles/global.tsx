import { css, Global } from "@emotion/react";

export const GlobalStyle = () => {
  return (
    <Global
      styles={() => css`
        // Font

        @font-face {
            font-family: 'Pretendard';
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            src: url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Regular.woff2') format('woff2'),
                url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Regular.woff') format('woff'),
                url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Regular.otf') format('opentype');
        }

        @font-face {
            font-family: 'Pretendard';
            font-weight: 600;
            font-style: normal;
            font-display: swap;
            src: url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-SemiBold.woff2') format('woff2'),
                url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-SemiBold.woff') format('woff'),
                url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-SemiBold.otf') format('opentype');
        }
                
        @font-face {
            font-family: 'Pretendard';
            font-weight: 700;
            font-style: normal;
            font-display: swap;
            src: url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Bold.woff2') format('woff2'),
                url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Bold.woff') format('woff'),
                url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Bold.otf') format('opentype');
        }

        // RootContainer
        body {
          background-color: #212121; // 임시
          font-family: "Pretendard", sans-serif;
        }
        #root {
          display: flex;
          justify-content: center;
        }
        button {
          font-family: "Pretendard", sans-serif;
        }
      `}
    />
  );
};
