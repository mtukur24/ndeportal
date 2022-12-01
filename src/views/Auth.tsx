import { CircularProgress, TextField } from "@mui/joy";
import { InputAdornment, Typography, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/ndelogo.png";
import { CustomInput } from "../component/InputField";
import { useBearStore } from "../store";
import GetStarted from "./GetStarted";
import Register from "./Register";

const Button = styled.button`
    width: 100%;
    height: 38px;
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

const Auth = ({ name, info, children }: any) => {
    const matches = useMediaQuery("(min-width:600px)");
    const NextPage = useBearStore((state: any) => state.NextPage);

    return (

        <Grid2
            container
            gap={1}
            flexDirection={"column"}
            flexWrap={"nowrap"}
            sx={{
                padding: 4,
                height: 420,
                width: 480,
                background: "white",
                backdropFilter: "blur(10px)",
                borderRadius: 3,
                position: "absolute",
                color: "black",
            }}
        >

            <GetStarted />

            {!matches && <img src={logo} alt="" width={280} height={80} />}

            <Typography fontSize={22} fontWeight={700} sx={{ mb: 4 }}>
                {name}
            </Typography>
            <Typography fontSize={16} fontWeight={100} sx={{ mb: 2 }}>
                {info}
            </Typography>
            {children}

        </Grid2>

    );
}

export default Auth;