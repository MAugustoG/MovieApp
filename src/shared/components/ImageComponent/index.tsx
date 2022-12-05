// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import Box, { BoxProps } from '@mui/material/Box';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { handleGetImagePath } from '../../utils/handleGetImagePath';

type ImageComponentProps = Omit<BoxProps, 'src' | 'component'> & {
  alt: string;
  path: null | string;
};

export const ImageComponent = ({ alt, path, ...rest }: ImageComponentProps) => {
  return path ? (
    <Box
      {...rest}
      alt={alt}
      component='img'
      src={`${handleGetImagePath({ path })}`}
    />
  ) : (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SentimentVeryDissatisfiedOutlinedIcon
        color='inherit'
        fontSize='large'
        sx={{ fontSize: '5rem' }}
        aria-label='not-found-image'
      />
    </Box>
  );
};
