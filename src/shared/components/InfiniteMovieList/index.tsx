// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useCallback, useRef } from 'react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Loader } from '../Loader';
import { MoviesCard } from '../MoviesCard';
import { Movie } from '../../types/movies/common/movie.types';

interface InfiniteMovieListParams {
  data?: Movie[];
  isFetching?: boolean;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
}

export const InfiniteMovieList = ({
  data,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: InfiniteMovieListParams) => {
  const intersectionObserver = useRef<IntersectionObserver>();

  const lastMovieRef = useCallback(
    (movieCardElement: Element) => {
      if (isFetchingNextPage) return;

      if (intersectionObserver.current != null)
        intersectionObserver.current.disconnect();

      intersectionObserver.current = new IntersectionObserver(
        (movieCardElement) => {
          if (movieCardElement[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        }
      );

      if (movieCardElement)
        intersectionObserver.current.observe(movieCardElement);
    },
    [hasNextPage, fetchNextPage, isFetchingNextPage]
  );

  const content = data?.map((movie, index) => {
    if (data.length === index + 1) {
      return (
        <Grid item xs={6} sm={3} md={1} key={`${movie.id}${index}`}>
          <MoviesCard movie={movie} ref={lastMovieRef} />
        </Grid>
      );
    }

    return (
      <Grid item xs={6} sm={3} md={1} key={`${movie.id}${index}`}>
        <MoviesCard movie={movie} />
      </Grid>
    );
  });

  return (
    <Box>
      <Grid container spacing={1} sx={{ background: 'transparent' }}>
        {content}
        {isFetchingNextPage && <Loader />}
      </Grid>
    </Box>
  );
};
