// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { toast } from 'react-toastify';
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { TOP_RATED_MOVIES_CACHE_KEY } from '../../shared/constants';
import {
  requestTopRatedMovies,
  RequestTopRatedMoviesResponse,
} from '../api/requestTopRatedMovies';

export const useTopRatedMovies = (
  options?: Omit<
    UseInfiniteQueryOptions<RequestTopRatedMoviesResponse, Error>,
    'onError'
  >
) => {
  return useInfiniteQuery<RequestTopRatedMoviesResponse, Error>(
    TOP_RATED_MOVIES_CACHE_KEY,
    async ({ pageParam = 1 }) =>
      await requestTopRatedMovies({ page: pageParam }),
    {
      ...options,
      refetchOnWindowFocus: false,
      onError: ({ message }) => toast.error(message),
      getNextPageParam: ({ results }, allPages) =>
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/strict-boolean-expressions
        results.length ? allPages.length + 1 : undefined,
    }
  );
};
