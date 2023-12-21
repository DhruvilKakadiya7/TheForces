import React from "react";
import { Routes, Route } from "react-router-dom";

import { themeContext } from "./context/themeContest";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header/Header";
import Page404 from "./components/Page404";

import "./App.css";
import { Home } from "./pages/Home/Home";
import { Admin } from "./pages/Admin/Admin";
import { Rating } from "./pages/Rating/Rating";
import { Profiles } from "./pages/Profiles/Profiles";
import { ShowProfile } from "./pages/Profiles/ShowProfile";
import ComingSoon from "./components/ComingSoon";
import usePageTracking from "./usePackageTacking";
import { Contests } from "./pages/Contests/Contests";
import { LoadContest } from "./pages/Contests/LoadContest";

function MyApp() {
  usePageTracking();
  return (
    <div className="app-container">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ratings" element={<Rating />} />
          <Route path="/profile/:handle" element={<ShowProfile />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/blogs" element={<ComingSoon/>}/>
          <Route path="/contests" element={<Contests/>}/>
          <Route path="contest/:id" element={<LoadContest/>}/>
          <Route path="/problemset" element={<ComingSoon/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  const getTheme = () => {
    const THEMES = ["dark", "light"];
    const DEFAUL_THEME = "light";

    const localTheme = localStorage.getItem("theme");
    if (THEMES.includes(localTheme)) {
      return localTheme;
    } else {
      return DEFAUL_THEME;
    }
  };
  const [mode, setMode] = React.useState(getTheme());
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevTheme) => {
          const newTheme = prevTheme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return newTheme;
        });
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark' && {
            background: {
              default: '#121212',
              paper: '#121212',
              rowDark: '#2e3a45',
              rowLight: '#1e262e',
              headRow: '#262629',
              code: '#4c4c4d',
              searchDark: '#aeb1b5'
            },
            text: {
              deltaPositive: "#2eb804",
              deltaNegative: "#a0a19f",
              math: "#d4d4d4"
            },
            border: {
              profileBox: '#f8f8f8'
            }
          }),
          ...(mode === 'light' && {
            background: {
              rowLight: '#f8f8f8',
              rowDark: '#fff',
              headRow: '#E1E1E1',
              code: '#bebec2',
              searchDark: '#aeb1b5'
            },
            text: {
              deltaPositive: "green",
              deltaNegative: "gray",
              math: "black"
            },
            border: {
              profileBox: 'gray'
            }
          }),
        },
      }),
    [mode]
  );

  return (
    <themeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </themeContext.Provider>
  );
}
