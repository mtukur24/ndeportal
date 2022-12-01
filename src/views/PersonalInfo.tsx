import {
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Typography
} from "@mui/material";
import { CustomInput } from "../component/InputField";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { CustomButton } from "../component/Custombutton";
import { stateList } from "../assets/stateList";
import { useBearStore } from "../store";
import HorizontalLabelPositionBelowStepper from "../component/Stepper";


////new branchh

const PersonalInfo = () => {
    const [fileDataURL, setFileDataURL] = useState("");
    const [stateOrg, setStateOrg] = useState<any>("");
    const [stateR, setStateR] = useState<any>("");
    const [stateP, setStateP] = useState<any>("");

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
                color: "black",
            }}
        >
            <HorizontalLabelPositionBelowStepper page={page} />

            <Grid2
                container
                flexDirection={"row"}
                flexWrap={"nowrap"}
            >
                <Grid sx={{ m: 0 }}>
                    <Typography
                        gutterBottom
                        mb={1}
                        mt={-1}
                        variant="h5"
                        component="div"
                        textAlign={"center"}
                    >
                        Personal Information
                    </Typography>
                    {/* <Divider
                    sx={{
                        mb: 2,
                    }}
                    variant="middle"
                /> */}
                    <Grid container gap={2} flexDirection={"column"} flexWrap={"nowrap"} width={580}>
                        <Grid flexWrap={"nowrap"} gap={2} container >
                            <Grid item sm={6} xs={12}>
                                <CustomInput
                                    variant="outlined"
                                    label="Last Name"
                                    size="small"
                                    type="text"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <CustomInput
                                    variant="outlined"
                                    label="First Name"
                                    size="small"
                                    type="text"
                                    fullWidth
                                />
                            </Grid>

                        </Grid>
                        <Grid flexWrap={"nowrap"} gap={2} container>
                            <CustomInput
                                variant="outlined"
                                size="small"
                                fullWidth
                                label="Email"
                                type="email"
                                sx={{ mt: 2.9 }}
                            />
                            <Grid item sm={6} xs={12}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">
                                        Date of Birth
                                    </FormLabel>
                                    <CustomInput variant="outlined" size="small" type="date" />
                                </FormControl>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">
                                        Gender
                                    </FormLabel>
                                    <RadioGroup
                                        sx={{
                                            display: "flex",
                                            flexWrap: "noWrap",
                                        }}
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio size="small" />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio size="small" />}
                                            label="Male"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography mb={1} >State of Origin</Typography>
                            <Grid gap={2} container flexWrap={"nowrap"}>
                                <Grid xs={6}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-select-small">State</InputLabel>
                                        <Select
                                            fullWidth
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            label="Age"
                                            size="small"
                                            value={stateOrg}
                                            onChange={(e) => setStateOrg(e.target.value)}
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
                                <Grid xs={6}>
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
                                            {stateList.map(id => id.state === stateOrg && (id.lgas.map(lga => (<MenuItem value={lga}>{lga}</MenuItem>))))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid flexWrap={"nowrap"} gap={1} container mb={-1}>
                            <Grid item sm={6} xs={12}>
                                <Typography>Residential Address</Typography>
                                <Grid p={1} gap={1} container ml={-1} >
                                    <Grid xs={6}>
                                        <FormControl fullWidth size="small">
                                            <InputLabel id="demo-select-small">State</InputLabel>
                                            <Select
                                                fullWidth
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="Age"
                                                size="small"
                                                value={stateR}
                                                onChange={(e) => setStateR(e.target.value)}
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
                                                {stateList.map(id => id.state === stateR && (id.lgas.map(lga => (<MenuItem value={lga}>{lga}</MenuItem>))))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid xs={12}>
                                        <CustomInput
                                            label="Address"
                                            rows={2}
                                            multiline
                                            size="small"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid item sm={6} >
                                <Typography>Permernant Address</Typography>
                                <Grid p={1} gap={1} container ml={-1}>
                                    <Grid xs={6}>
                                        <FormControl fullWidth size="small">
                                            <InputLabel id="demo-select-small">State</InputLabel>
                                            <Select
                                                fullWidth
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="Age"
                                                size="small"
                                                value={stateP}
                                                onChange={(e) => setStateP(e.target.value)}
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
                                                {stateList.map(id => id.state === stateP && (id.lgas.map(lga => (<MenuItem value={lga}>{lga}</MenuItem>))))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid xs={12}>
                                        <CustomInput
                                            label="Address"
                                            rows={2}
                                            multiline
                                            size="small"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <CustomButton
                            sx={{
                                width: 100,
                                left: "80%"

                            }}
                            onClick={NextPage}
                            // disabled={true}
                            // loading={btnLoading}
                            disableFocusRipple
                            disableRipple
                            fullWidth
                        >
                            Next
                        </CustomButton>
                    </Grid>
                </Grid>

                <Divider sx={{ m: 2 }} orientation="vertical" variant="middle" flexItem />

                <Grid>
                    <Grid
                        container
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{
                            bgcolor: "#ccccac9b",
                            border: "1px solid #00000014",
                            borderRadius: "5px",
                            cursor: "pointer",
                            width: 140,
                            height: 150,
                            mt: 4,
                            ml: 0.5,
                        }}
                    >
                        {fileDataURL ? (
                            <img width={140} height={150} src={fileDataURL} alt="avater" />
                        ) : (
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="label"
                            >
                                <input
                                    // onChange={changeHandler}
                                    hidden
                                    accept="image/*"
                                    type="file"
                                />
                                {/* <AddAPhotoIcon /> */}
                            </IconButton>
                        )}
                    </Grid>
                    <Typography color={"grey"} fontSize={11}>
                        Supported fomat jpeg/png/jpg
                    </Typography>
                    <Typography mb={3} fontSize={11}>
                        max size 2mb
                    </Typography>
                    <CustomInput
                        variant="outlined"
                        label="NIN"
                        size="small"
                        type="tel"
                        sx={{
                            width: 145
                        }}
                    // onChange={handleNIN}
                    // fullWidth
                    // error={isNIN === "invalid NIN" ? true : false}
                    // InputProps={{
                    //     endAdornment:
                    //         isNIN === "ok" ? (
                    //             <CheckIcon color="success" />
                    //         ) : isNIN === "loading" ? (
                    //             <CircularProgress size={20} color="success" />
                    //         ) : (
                    //             ""
                    //         ),
                    // }}
                    />
                </Grid>




            </Grid2 >
        </Grid2>
    );
}

export default PersonalInfo;
