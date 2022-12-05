// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import { forwardRef, RefObject } from 'react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { StyledCard } from './styles';
import { ImageComponent } from '../ImageComponent';
import { TIME_TO_PREFETCH_MOVIE } from '../../constants';
import { TopRatedMovie } from '../../types/movies/top-rated-movie.types';
import { usePrefetchMovieDetails } from '../../../services/hooks/usePrefetchMovieDetails';
import { Tooltip } from '@mui/material';

interface MoviesCardParams {
  movie: TopRatedMovie;
}

export const MoviesCard = forwardRef(({ movie }: MoviesCardParams, ref) => {
  const { handlePrefetchMovieDetails } = usePrefetchMovieDetails();

  const executePrefetch = debounce(async () => {
    await handlePrefetchMovieDetails({ id: movie.id });
  }, TIME_TO_PREFETCH_MOVIE);

  const handlePrefetch = async () => {
    await executePrefetch();
  };

  return (
    <StyledCard
      onMouseEnter={() => handlePrefetch}
      ref={ref as RefObject<HTMLDivElement>}
      onMouseLeave={() => executePrefetch.cancel()}
    >
      <CardActionArea>
        <CardMedia>
          <Tooltip title={movie.title}>
            <Link to={`/movie/${movie.id}`}>
              <ImageComponent
                alt={movie.title}
                path={movie.poster_path ?? movie.backdrop_path}
                sx={{
                  width: '100%',
                  height: '100%',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </Link>
          </Tooltip>
        </CardMedia>
      </CardActionArea>
    </StyledCard>
  );
});
