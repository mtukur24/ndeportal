import * as React from 'react';
import Button from '@mui/joy/Button';

export default function SxBTN({children,isLoading}:any) {
  return (
    <Button
      size="md"
      loadingPosition="end"
      loading={isLoading}
      variant="solid"
      sx={(theme) => ({
        background: `linear-gradient(-45deg, ${theme.vars.palette.success[300]}, ${theme.vars.palette.success[300]})`,
        fontWeight: 'lg', // short-hand syntax, same as `theme.fontWeight.lg`
        '&:hover': {
          background: `linear-gradient(-45deg, ${theme.vars.palette.success[400]}, ${theme.vars.palette.success[400]})`,
        },
      })}
    >
        {children}
    </Button>
  );
}




// export default function ButtonLoadingPosition() {
//   return (
//     <Stack spacing={2} direction="row">
//       <Button loading loadingPosition="start" variant="outlined">
//         Fetch data
//       </Button>
//       <Button
//         loading
//         loadingPosition="end"
//         endDecorator={<SendIcon />}
//         variant="solid"
//       >
//         Send
//       </Button>
//     </Stack>
//   );
// }