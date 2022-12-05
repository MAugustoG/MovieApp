// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { toast } from 'react-toastify';
import { useQuery, QueryOptions } from 'react-query';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { MOVIE_DETAILS_CACHE_KEY } from '../../shared/constants';
import {
  requestMovieDetails,
  RequestMovieDetailsParams,
  RequestMovieDetailsResponse,
} from '../api/requestMovieDetails';

// -----------------------------------------------------------------------------
//  TYPES
// -----------------------------------------------------------------------------
type UseMovieDetailsParams = RequestMovieDetailsParams;

export const useMovieDetails = (
  { id }: UseMovieDetailsParams,
  options?: Omit<QueryOptions<RequestMovieDetailsResponse, Error>, 'onError'>
) => {
  return useQuery<RequestMovieDetailsResponse, Error>(
    [MOVIE_DETAILS_CACHE_KEY, id],
    async () => await requestMovieDetails({ id }),
    {
      ...options,
      onError: ({ message }) => toast.error(message),
    }
  );
};
