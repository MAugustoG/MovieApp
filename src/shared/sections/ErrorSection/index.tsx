// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

export const ErrorSection = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        width: '99vw',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SentimentDissatisfiedIcon fontSize='large' />
      <Typography
        variant='h6'
        align='center'
        sx={{ textTransform: 'capitalize' }}
      >
        Something went wrong
      </Typography>
    </Stack>
  );
};
