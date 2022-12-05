// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { ImageComponent } from '../../../../components/ImageComponent';
import { MovieCreditsCast } from '../../../../types/movies/movie-credits.types';

interface CastCardParams {
  cast: MovieCreditsCast;
}

export const CastCard = ({ cast }: CastCardParams) => {
  return (
    <Card sx={{ background: 'transparent' }}>
      <Stack spacing={2}>
        <ImageComponent
          alt={cast.name}
          path={cast.profile_path}
          sx={{ width: 125, borderRadius: '1rem' }}
        />
        <Typography sx={{ wordBreak: 'break-word' }}>{cast.name}</Typography>
      </Stack>
    </Card>
  );
};
