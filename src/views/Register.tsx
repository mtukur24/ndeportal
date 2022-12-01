import { Grid, InputAdornment, Slide, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { CircularProgress, TextField } from "@mui/joy";
import { Link } from "react-router-dom";
import logo from "../assets/ndelogo.png";
import styled from "styled-components";
import { useBearStore } from "../store";
import { CustomInput } from "../component/InputField";
import { CustomButton } from "../component/Custombutton";


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

const Register = ({ name, info, children }: any) => {
    const [submitState, setSubmitState] = useState("");
    const [phoneError, setPhoneError] = useState(false);

    const NextPage = useBearStore((state: any) => state.NextPage);

    const handleSubmit = () => {
        if (submitState === "") {
            setSubmitState("otp");
        }
        else if (submitState === "otp") {
            setSubmitState("register");
        }
    }

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
            {submitState === "" && (
                <Button onClick={handleSubmit}>Enter</Button>
            )}

            {submitState === "otp" && (
                <>
                    <Slide
                        direction="up"
                        in={submitState === "otp"}
                        mountOnEnter
                        unmountOnExit
                    >
                        <Grid container flexWrap={"nowrap"} sx={{ mb: 1 }}>
                            <CustomInput
                                variant="outlined"
                                label="Verification code"
                                // helperText={`enter code sent to your number >> ${token}`}
                                // onChange={handleCode}
                                size="small"
                            />
                            <CustomButton
                                disabled
                                sx={{ display: "inline", ml: 1, height: 40 }}
                            >
                                Resend
                            </CustomButton>
                        </Grid>
                    </Slide>
                    <Button onClick={handleSubmit}>Submit</Button>
                </>
            )}

            {submitState === "register" && (
                <>
                    <Grid container gap={1} >
                        <CustomInput
                            // onChange={(e)=>setPassword(e.target.value)}
                            variant="outlined"
                            label="Password"
                            size="small"
                            type="password"
                            // helperText={phoneError}
                            // error={phoneError && true}
                            // onChange={handlePhone}
                            fullWidth
                            sx={{ mb: 1 }}
                        />
                        <CustomInput
                            variant="outlined"
                            label="Confirm Password"
                            size="small"
                            type="password"
                            // helperText={phoneError}
                            // error={phoneError && true}
                            // onChange={handlePhone}
                            fullWidth
                            sx={{ mb: 1 }}
                        />
                    </Grid>
                    <Link style={{
                        textDecoration: "none",
                        textAlign: "center",
                        color: "green",
                        fontSize: "12px",
                        fontWeight: "bolder"
                    }} to={"/login"}><Button>Register</Button></Link>
                </>
            )}
            <span style={{
                textDecoration: "none",
                textAlign: "center",
                color: "green",
                fontSize: "13px",
            }} >
                Already have an account?
                <Link style={{
                    textDecoration: "none",
                    textAlign: "center",
                    color: "green",
                    fontSize: "12px",
                    fontWeight: "bolder"
                }} to={"/login"}> Click Here</Link>
            </span>
        </React.Fragment>
    );
}

export default Register;