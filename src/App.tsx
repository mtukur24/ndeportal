import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import SxBTN from "./component/Buttons";
import { Box, Grid, Typography } from "@mui/material";

import HorizontalLabelPositionBelowStepper from "./component/Stepper";
import { routes } from "./routes";
import { useBearStore } from "./store";
import styled from "styled-components";
import GetStarted from "./views/GetStarted";
import { Routes, Route } from "react-router-dom";
import Register from "./views/Register";
import Login from "./views/Login";
import Auth from "./views/Auth";
import Programme from "./views/Programme";
import PersonalInfo from "./views/PersonalInfo";
import Education from "./views/Education";

const MainDiv = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  background: linear-gradient(145deg, #cef4d4 0,#00ae3d 150%);
  height: 100vh; 
`;


function App() {
  const page = useBearStore((state: any) => state.page)

  return (
    <MainDiv>
      <Routes>
        {/* {routes.map((route, index) => <Route path={route.path} element={route.element}></Route>)} */}
        <Route path={'/login'} element={<Auth name={"Login"} info={"Input your login details"} children={<Login />} />}></Route>
        <Route path={'/register'} element={<Auth name={"Register"} info={"Input a Valid Phone Number"} children={<Register />} />}></Route>
        <Route path={'/personalinfo'} element={<PersonalInfo />}></Route>
        <Route path={'/education'} element={<Education />}></Route>
        <Route path={'/programmes'} element={<Programme />}></Route>
      </Routes>

    </MainDiv>
  );
}
export default App;

const githubTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          plainBg: "#2DA44E",
          plainColor: "#2DA44E",
          plainHoverBg: "#2DA44E",
          plainActiveBg: "#2da44e",
          softColor: "#2DA44E",
        },
        success: {
          solidBg: "#18201a",
          solidHoverBg: "#632c97",
          solidActiveBg: "#8e7629",
        },
        neutral: {
          outlinedBg: "#F6F8FA",
          outlinedHoverBg: "#F3F4F6",
          outlinedActiveBg: "rgba(238, 239, 242, 1)",
          outlinedBorder: "rgba(27, 31, 36, 0.15)",
        },
        focusVisible: "#0366d64c",
      },
    },
  },
  focus: {
    default: {
      outlineWidth: "3px",
    },
  },
  fontFamily: {
    body: "SF Pro Text, var(--gh-fontFamily-fallback)",
  },
  components: {
    JoyCircularProgress: {
      styleOverrides: {
        svg: {
          stroke: "rebeccapurple",
          borderColor: "orange",
        },
        root: {
          stroke: "red",
        },
      },
    },
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "6px",
          boxShadow: "0 1px 0 0 rgba(27, 31, 35, 0.04)",
          transition: "80ms cubic-bezier(0.33, 1, 0.68, 1)",
          transitionProperty: "color,background-color,box-shadow,border-color",
          ...(ownerState.size === "md" && {
            fontWeight: 600,
            minHeight: "32px",
            fontSize: "14px",
            "--Button-paddingInline": "1rem",
          }),
          ...(ownerState.color === "success" &&
            ownerState.variant === "solid" && {
            "--gh-palette-focusVisible": "rgba(46, 164, 79, 0.4)",
            border: "1px solid rgba(27, 31, 36, 0.15)",
            "&:active": {
              boxShadow: "inset 0px 1px 0px rgba(20, 70, 32, 0.2)",
            },
          }),
          ...(ownerState.color === "neutral" &&
            ownerState.variant === "outlined" && {
            "&:active": {
              boxShadow: "none",
            },
          }),
        }),
      },
    },
  },
});
