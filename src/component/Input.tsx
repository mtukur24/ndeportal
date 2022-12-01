import { CircularProgress, TextField } from "@mui/joy"


function Input() {
  return (
    <TextField
        variant="plain"
        size="sm"
        placeholder="Phone"
        endDecorator={<CircularProgress thickness={2} size="sm"/>}
    />
  )
}

export default Input