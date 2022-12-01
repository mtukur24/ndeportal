import {
    Divider,
    FormControl, FormLabel, Grid,
    InputLabel, MenuItem, Select,
    Typography
} from "@mui/material";
import { CustomButton } from "../component/Custombutton";
import { CustomInput } from "../component/InputField";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useBearStore } from "../store";
import HorizontalLabelPositionBelowStepper from "../component/Stepper";

const education = [
    "Primary School",
    "SSCE",
    "ND",
    "HND",
    "Degree"
]

const Education = () => {
    const [state, setState] = useState<any>("");
    const NextPage = useBearStore((state: any) => state.NextPage);
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
                background: "#ffffff57",
                backdropFilter: "blur(10px)",
                borderRadius: 3,
                position: "absolute",
                color: "white",
            }}
        >
            <HorizontalLabelPositionBelowStepper page={page} />

            <Grid>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                    sx={{
                        mb: 2,
                    }}
                >
                    Education
                </Typography>
                {/* <Divider
                    sx={{
                        mb: 2,
                    }}
                    variant="middle"
                /> */}
                <Grid width={"750px"} flexWrap={"nowrap"} flexDirection="column" mt={1} container gap={2}>
                    <Grid flexWrap={"nowrap"} gap={2} container >
                        <Grid flexWrap={"nowrap"} container gap={2} xs={12}>
                            <Grid item sm={6} xs={12}>
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-select-small">Qualification</InputLabel>
                                    <Select
                                        autoWidth
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        label="Qualification"
                                        size="small"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {education.map((state) => (
                                            <MenuItem value={state}>{state}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid item sm={12} xs={12} ml={-30}>
                            <CustomInput fullWidth size={"small"} label="Institution" />
                        </Grid>
                    </Grid>

                    <Grid flexWrap={"nowrap"} container gap={2} xs={12}>
                        <Grid xs={6}>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                Start Date
                            </FormLabel>
                            <CustomInput fullWidth type="month" size={"small"} />
                        </Grid>
                        <Grid xs={6}>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                End Date
                            </FormLabel>
                            <CustomInput fullWidth type="month" size={"small"} />
                        </Grid>
                    </Grid>

                    <Grid xs={6} mb={2}>
                        <CustomButton fullWidth size={"small"} sx={{ left: "50%" }}>
                            Add
                        </CustomButton>
                    </Grid>
                </Grid>

            </Grid>
            <Divider sx={{ mb: 1, mt: 1 }} orientation="horizontal" variant="middle" flexItem />
            <Grid>
                <Table />
            </Grid>
            <Grid mt={3} xs={12}>
                <CustomButton
                    sx={{
                        width: 100,
                        left: "80%"

                    }}
                    onClick={NextPage}
                    // disabled={button}
                    // loading={btnLoading}
                    disableFocusRipple
                    disableRipple
                    fullWidth
                >
                    Next
                </CustomButton>
            </Grid>

        </Grid2>
    );
}

export default Education;


const Table = () => {
    return (
        <Grid
            mt={1}
            sx={{
                border: "2px solid #00000037",
                borderRadius: 1,
                height: 120,
                p: 0,
            }}
        >
            <Grid
                sx={{ backgroundColor: "#4caf4f75", padding: "1px 3px" }}
                flexWrap={"nowrap"}
                container
                display='flex'
                justifyContent="space-between"
            >
                <Grid component={"span"}>Qualification</Grid>
                <Grid component={"span"}>Course</Grid>
                <Grid component={"span"}>School</Grid>
                <Grid component={"span"}>Start</Grid>
                <Grid component={"span"}>End</Grid>
            </Grid>
            <Typography gutterBottom variant="caption" textAlign={"center"}>
                List will be populated here
            </Typography>
        </Grid>
    );
};