// -----------------------------------------------------------------------------
//  'INTERNAL' IMPORT
// -----------------------------------------------------------------------------
import { axiosInstance } from '../../axios';
import { API_KEY, BASE_URL } from '../../../../shared/constants';
import { Movie } from '../../../../shared/types/movies/common/movie.types';
import { DetailedMovie } from '../../../../shared/types/movies/detailed-movie.types';

// -----------------------------------------------------------------------------
//  TYPES
// -----------------------------------------------------------------------------
export type RequestMovieDetailsResponse = DetailedMovie;
export type RequestMovieDetailsParams = Pick<Movie, 'id'>;

export const requestMovieDetails = async ({
  id,
}: RequestMovieDetailsParams): Promise<RequestMovieDetailsResponse> => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  const { data } = await axiosInstance.get<RequestMovieDetailsResponse>(url);
  return data;
};
