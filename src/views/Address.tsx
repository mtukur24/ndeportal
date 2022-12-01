import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { stateList } from "../assets/stateList";
import { CustomButton } from "../component/Custombutton";
import { CustomInput } from "../component/InputField";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useBearStore } from "../store";



const Address = () => {
    const [state, setState] = useState<any>("")
    const NextPage = useBearStore((state: any) => state.NextPage);

    return (

        <Grid2
            container
            flexDirection={"row"}
            flexWrap={"nowrap"}
            sx={{
                padding: 2,
                mr: 10,
                height: 450,
                width: 800,
                background: "#ffffff57",
                backdropFilter: "blur(10px)",
                borderRadius: 3,
                position: "absolute",
                color: "black",
            }} >
            <Typography
                mb={3}
                fontWeight={700}
                fontSize={21}
                textAlign={"center"}
            >
                Addresses
            </Typography>
            <Grid>
                <Typography>Residential Address</Typography>
                <Grid p={2} gap={1} container>
                    <Grid xs={5.5}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-select-small">State</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-select-small"
                                id="demo-select-small"
                                label="Age"
                                size="small"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {stateList.map((state) => (
                                    <MenuItem value={state.state}>{state.state}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={5.5}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-select-small">LGA</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-select-small"
                                id="demo-select-small"
                                label="Age"
                                size="small"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {stateList.map(id => id.state === state && (id.lgas.map(lga => (<MenuItem value={lga}>{lga}</MenuItem>))))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={11.25}>
                        <CustomInput
                            label="Address"
                            minRows={3}
                            multiline
                            size="small"
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid>
                <Typography>Permernant Address</Typography>
                <Grid p={2} gap={1} container>
                    <Grid xs={5.5}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-select-small">State</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-select-small"
                                id="demo-select-small"
                                label="Age"
                                size="small"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {stateList.map((state) => (
                                    <MenuItem value={state.state}>{state.state}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={5.5}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-select-small">LGA</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-select-small"
                                id="demo-select-small"
                                label="Age"
                                size="small"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {stateList.map(id => id.state === state && (id.lgas.map(lga => (<MenuItem value={lga}>{lga}</MenuItem>))))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={11.25}>
                        <CustomInput
                            label="Address"
                            minRows={3}
                            multiline
                            size="small"
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid mt={1} xs={11}>
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

export default Address;
