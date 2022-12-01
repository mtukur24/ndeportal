import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RequirementInfo from './RequirmentInfo';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

export default function GetStarted() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={style}
        >
            <RequirementInfo />
            {/* <button>Get Started</button> */}

        </Modal>

    );
}