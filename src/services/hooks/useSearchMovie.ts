// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { toast } from 'react-toastify';
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { MOVIE_SEARCHED_CACHE_KEY } from '../../shared/constants';
import {
  requestSearchMovie,
  RequestSearchMovieParams,
  RequestSearchMovieResponse,
} from '../api/requestSearchMovie';

// -----------------------------------------------------------------------------
//  TYPES
// -----------------------------------------------------------------------------
type UseSearchMovieParams = Pick<RequestSearchMovieParams, 'title'>;

export const useSearchMovie = (
  { title }: UseSearchMovieParams,
  options?: Omit<
    UseInfiniteQueryOptions<RequestSearchMovieResponse, Error>,
    'onError'
  >
) => {
  return useInfiniteQuery<RequestSearchMovieResponse, Error>(
    [MOVIE_SEARCHED_CACHE_KEY, title],
    async ({ pageParam = 1 }) =>
      await requestSearchMovie({ page: pageParam, title }),
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
