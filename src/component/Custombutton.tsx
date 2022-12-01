import styled from "@emotion/styled";
import { LoadingButton } from '@mui/lab';
import { green} from "@mui/material/colors";

export const CustomButton = styled(LoadingButton)<any>(() => ({
    color: "#fff",
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  }));