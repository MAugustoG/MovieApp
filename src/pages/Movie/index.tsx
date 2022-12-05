// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useParams } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { StyledBanner, StyledGrid } from './styles';
import { Loader } from '../../shared/components/Loader';
import { CastSection } from '../../shared/sections/CastSection';
import { VideoSection } from '../../shared/sections/VideoSection';
import { ErrorSection } from '../../shared/sections/ErrorSection';
import { useMovieDetails } from '../../services/hooks/useMovieDetails';
import { ImageComponent } from '../../shared/components/ImageComponent';
import { handleGetImagePath } from '../../shared/utils/handleGetImagePath';
import { handleFormatMovieReview } from '../../shared/utils/handleFormatMovieReview';

interface MovieUseParams {
  id: string;
}

export const Movie = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { id } = useParams<keyof MovieUseParams>() as MovieUseParams;

  const { data, error, isLoading } = useMovieDetails({ id: parseInt(id, 10) });

  if (error) return <ErrorSection />;

  if (isLoading || !data) return <Loader />;

  const { title, genres, overview, poster_path, vote_average, backdrop_path } =
    data;

  return (
    <StyledGrid container spacing={2}>
      <StyledBanner
        item
        container
        url={`${handleGetImagePath({
          path: poster_path ?? backdrop_path ?? '',
        })}`}
      />
      <Container sx={{ zIndex: 1, marginTop: '-10rem' }}>
        <Grid item container>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {!isMobile && (
              <ImageComponent alt={title} path={poster_path ?? backdrop_path} />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography
                variant='h3'
                sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
              >
                {title}
              </Typography>
              <Stack spacing={1} direction='row'>
                <Rating
                  readOnly
                  precision={0.1}
                  name={`${title}-rating`}
                  defaultValue={handleFormatMovieReview({
                    rating: vote_average,
                  })}
                />
                {
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                    }}
                  >
                    {handleFormatMovieReview({ rating: vote_average })}
                  </Typography>
                }
              </Stack>
              <Stack direction='row' sx={{ flexWrap: 'wrap', gap: 1 }}>
                {genres.map(({ id, name }) => (
                  <Chip key={id} label={name} color='info' variant='outlined' />
                ))}
              </Stack>
              <Typography variant='body1' align='justify'>
                {overview}
              </Typography>
              <CastSection id={parseInt(id, 10)} />
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '3rem' }}>
          <VideoSection id={parseInt(id, 10)} title={title} />
        </Grid>
      </Container>
    </StyledGrid>
  );
};
