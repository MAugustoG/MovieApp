// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { toast } from 'react-toastify';
import { useQuery, QueryOptions } from 'react-query';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { MOVIE_VIDEOS_CACHE_KEY } from '../../shared/constants';
import {
  requestMovieVideos,
  RequestMovieVideosParams,
  RequestMovieVideosResponse,
} from '../api/requestMovieVideos';

// -----------------------------------------------------------------------------
//  TYPES
// -----------------------------------------------------------------------------
type UseMovieVideosParams = RequestMovieVideosParams;

export const useMovieVideos = (
  { id }: UseMovieVideosParams,
  options?: Omit<QueryOptions<RequestMovieVideosResponse, Error>, 'onError'>
) => {
  return useQuery<RequestMovieVideosResponse, Error>(
    [MOVIE_VIDEOS_CACHE_KEY, id],
    async () => await requestMovieVideos({ id }),
    {
      ...options,
      onError: ({ message }) => toast.error(message),
    }
  );
};
