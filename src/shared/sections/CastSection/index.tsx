// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Loader } from '../../components/Loader';
import { CastCard } from './components/CastCard';
import { useMovieCredits } from '../../../services/hooks/useMovieCredits';

interface CastSectionProps {
  id: number;
}

export const CastSection = ({ id }: CastSectionProps) => {
  const { data, isLoading } = useMovieCredits({ id });

  if (isLoading || !data) return <Loader />;

  const { cast } = data;

  return (
    <Stack spacing={2}>
      <Typography
        variant='h5'
        sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
      >
        Cast
      </Typography>
      <Typography
        variant='h5'
        sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
      ></Typography>
      <Stack direction='row' sx={{ flexWrap: 'wrap', gap: 1 }}>
        {cast.slice(0, 5).map((castItem, index) => (
          <CastCard key={`${castItem.id}${index}`} cast={castItem} />
        ))}
      </Stack>
    </Stack>
  );
};
