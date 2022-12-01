import styled from "@emotion/styled";
import { TextField, TextFieldProps } from "@mui/material";

export const CustomInput = styled(TextField)<TextFieldProps>(() => ({
    color: "#fff",
    backgroundColor:"#c3fabe21",
    '&:hover': {
      
    },
    '&::focus': {
        backgroundColor:"#ffffff",
    },
  }));