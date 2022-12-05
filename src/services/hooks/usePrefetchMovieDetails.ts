// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { requestMovieVideos } from '../api/requestMovieVideos';
import { reactQueryClient } from '../../config/libs/react-query';
import { requestMovieCredits } from '../api/requestMovieCredits';
import { requestMovieDetails } from '../api/requestMovieDetails';
import { Movie } from '../../shared/types/movies/common/movie.types';
import {
  TIME_TO_KEEP_IN_CACHE,
  MOVIE_VIDEOS_CACHE_KEY,
  MOVIE_CREDITS_CACHE_KEY,
  MOVIE_DETAILS_CACHE_KEY,
} from '../../shared/constants';

type UsePrefetchMovieDetailsParams = Pick<Movie, 'id'>;

export const usePrefetchMovieDetails = () => {
  const handlePrefetchMovieDetails = async ({
    id,
  }: UsePrefetchMovieDetailsParams) => {
    // PREFETCH MOVIE DETAILS
    await reactQueryClient.prefetchQuery(
      [MOVIE_DETAILS_CACHE_KEY, id],
      async () => await requestMovieDetails({ id }),
      { staleTime: TIME_TO_KEEP_IN_CACHE }
    );

    // PREFETCH MOVIE CREDITS
    await reactQueryClient.prefetchQuery(
      [MOVIE_CREDITS_CACHE_KEY, id],
      async () => await requestMovieCredits({ id }),
      { staleTime: TIME_TO_KEEP_IN_CACHE }
    );

    // PREFETCH MOVIE VIDEO
    await reactQueryClient.prefetchQuery(
      [MOVIE_VIDEOS_CACHE_KEY, id],
      async () => await requestMovieVideos({ id }),
      { staleTime: TIME_TO_KEEP_IN_CACHE }
    );
  };

  return { handlePrefetchMovieDetails };
};
