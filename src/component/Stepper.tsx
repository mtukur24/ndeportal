import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Get Started',
    'Personal Information',
    'Education',
    'Programme'
];

export default function HorizontalLabelPositionBelowStepper({ page }: any) {

    return (
        <Box sx={{ width: '100%', height: 10, mb: 10, mt: 1 }}>
            <Stepper activeStep={page} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel >{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}