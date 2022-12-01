import {
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Typography
} from "@mui/material";
import logo from "../assets/ndelogo.png";
import { CustomButton } from "../component/Custombutton";
import { CustomInput } from "../component/InputField";
import Grid2 from "@mui/material/Unstable_Grid2";
import SelectChip from "../component/selectChip";
import { useBearStore } from "../store";
import HorizontalLabelPositionBelowStepper from "../component/Stepper";

const Programme = () => {
    const page = useBearStore((state: any) => state.page);

    return (
        <Grid2
            container
            flexDirection={"column"}
            flexWrap={"nowrap"}
            sx={{
                padding: 3,
                height: 580,
                width: 800,
                background: "white",
                backdropFilter: "blur(10px)",
                borderRadius: 3,
                position: "absolute",
                color: "black",
            }}
        >
            <HorizontalLabelPositionBelowStepper page={page} />
            <Grid2
                container
                flexDirection={"row"}
                flexWrap={"nowrap"}
            >
                <Grid sx={{}}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign={"center"}
                        sx={{ mt: 5, mb: 5 }}
                    >
                        Programme
                    </Typography>
                    <Grid mt={2} container gap={2}>
                        <Grid xs={10.3} sm={12} sx={{ width: 500 }}>
                            <SelectChip />
                        </Grid>

                        <Grid xs={10.3} sm={12}>
                            <CustomInput fullWidth size={"small"} label="Career Interest" />
                        </Grid>

                        <Grid xs={10.3}>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox />}
                                label="I have participated in NDE program before"
                                labelPlacement="end"
                            />
                        </Grid>
                    </Grid>
                    <Grid mt={3} xs={10.3}>
                        <CustomButton
                            sx={{
                                width: 100,
                                left: "80%"

                            }}
                            // onClick={handleSubmit}
                            // disabled={button}
                            // loading={btnLoading}
                            disableFocusRipple
                            disableRipple
                            fullWidth
                        >
                            Submit
                        </CustomButton>
                    </Grid>
                </Grid>
            </Grid2>
        </Grid2>
    );
}

export default Programme;