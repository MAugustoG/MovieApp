// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { toast } from 'react-toastify';
import { QueryOptions, useQuery } from 'react-query';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { MOVIE_CREDITS_CACHE_KEY } from '../../shared/constants';
import {
  requestMovieCredits,
  RequestMovieCreditsParams,
  RequestMovieCreditsResponse,
} from '../api/requestMovieCredits';

// -----------------------------------------------------------------------------
//  TYPES
// -----------------------------------------------------------------------------
type UseMovieCreditsParams = RequestMovieCreditsParams;

export const useMovieCredits = (
  { id }: UseMovieCreditsParams,
  options?: Omit<QueryOptions<RequestMovieCreditsResponse, Error>, 'onError'>
) => {
  return useQuery<RequestMovieCreditsResponse, Error>(
    [MOVIE_CREDITS_CACHE_KEY, id],
    async () => await requestMovieCredits({ id }),
    {
      ...options,
      onError: ({ message }) => toast.error(message),
    }
  );
};
