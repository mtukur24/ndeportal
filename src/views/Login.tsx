import { InputAdornment } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CustomInput } from "../component/InputField";

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


const Login = () => {
    return (
        <React.Fragment>
            <CustomInput
                variant="outlined"
                label="Phone"
                size="small"
                type="tel"
                // helperText={phoneError}
                // error={phoneError?true:false}
                // onChange={handlePhone}
                fullWidth
                inputProps={{
                    maxLength: 10,
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">+234</InputAdornment>
                    ),
                }}
                sx={{
                    mb: 2,
                }}
            />
            <CustomInput
                variant="outlined"
                label="Password"
                size="small"
                type="password"
                fullWidth
                inputProps={{
                    minLength: 6,
                }}
                sx={{
                    mb: 1
                }}
            />
            <Button >Login</Button>
            <span style={{
                textDecoration: "none",
                textAlign: "center",
                color: "green",
                fontSize: "13px",
            }} >
                Need an account?
                <Link style={{
                    textDecoration: "none",
                    textAlign: "center",
                    color: "green",
                    fontSize: "12px",
                    fontWeight: "bolder"
                }}
                    // onClick={handleClick}
                    to={"/register"}> Click Here
                </Link>
            </span>
        </React.Fragment>
    );
}

export default Login;