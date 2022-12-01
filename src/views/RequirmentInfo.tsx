import { InputAdornment, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/ndelogo.png";
import { CircularProgress, List, ListItem, TextField } from "@mui/joy";
import SxBTN from "../component/Buttons";
import React, { useState } from "react";
import {
  Router,
  Route,
  Link,
  useLocation,
  Navigate,
  Outlet,
  Routes,
} from "react-router-dom";
import { CustomInput } from "../component/InputField";
import Register from "./Register";
import styled from "styled-components";
import { useBearStore } from "../store";


const Button = styled.button`
    width: auto;
    height: 32px;
    font-size: 14px;
    border: none;
    color: white;
    background: #2bb953;
    text-align: center;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background: #259a46;
    }
`;

const RequirementInfo = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const NextPage = useBearStore((state: any) => state.NextPage);


  return (
    <Grid2
      container
      gap={1}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        padding: 4,
        height: 420,
        width: 480,
        background: "#d9e6dd",
        backdropFilter: "blur(10px)",
        borderRadius: 3,
        position: "absolute",
        color: "black",
      }}
    >

      {matches && (
        <Grid2
          flex={1}
          container
          flexDirection={"column"}
          alignItems={"left"}
          sx={{
            width: 380,
            height: 350,
            borderRadius: 3,
            padding: 2,
          }}
        >
          <img src={logo} alt="" width={280} height={80} />
          <Typography mt={3} fontSize={22} fontWeight={700}>
            Requirements
          </Typography>
          <List size="sm" component={"ul"} aria-label="basic-list">
            <ListItem>Must be age 18+</ListItem>
            <ListItem>Valid Phone Number</ListItem>
            <ListItem>NIN Identification Number</ListItem>
            <ListItem>Passport photograph</ListItem>
          </List>
          {/* <Button>Login or Register</Button> */}
        </Grid2>
      )}
    </Grid2>
  );
}

export default RequirementInfo;





