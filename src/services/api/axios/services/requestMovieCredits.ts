// -----------------------------------------------------------------------------
//  'INTERNAL' IMPORT
// -----------------------------------------------------------------------------
import { axiosInstance } from '../../axios';
import { API_KEY, BASE_URL } from '../../../../shared/constants';
import { Movie } from '../../../../shared/types/movies/common/movie.types';
import {
  MovieCreditsCast,
  MovieCreditsCrew,
} from '../../../../shared/types/movies/movie-credits.types';

// -----------------------------------------------------------------------------
//  TYPES
// -----------------------------------------------------------------------------
export type RequestMovieCreditsParams = Pick<Movie, 'id'>;

export interface RequestMovieCreditsResponse {
  id: number;
  cast: MovieCreditsCast[];
  crew: MovieCreditsCrew[];
}

export const requestMovieCredits = async ({
  id,
}: RequestMovieCreditsParams): Promise<RequestMovieCreditsResponse> => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
  const { data } = await axiosInstance.get<RequestMovieCreditsResponse>(url);
  return data;
};
