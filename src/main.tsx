import { createRoot } from "react-dom/client";
//import App from "./App";
import { NavermapsProvider } from "react-naver-maps";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "styles/theme";
import { LoginPage } from "pages";

createRoot(document.getElementById("root")!).render(
  <NavermapsProvider
    ncpClientId={import.meta.env.VITE_NAVER_MAP_CLIENT_ID}
    submodules={["geocoder"]}
  >
    <ThemeProvider theme={defaultTheme}>
      {/* <App /> */}
      <LoginPage></LoginPage>
    </ThemeProvider>
  </NavermapsProvider>
);
