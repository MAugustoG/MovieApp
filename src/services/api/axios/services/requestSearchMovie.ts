// -----------------------------------------------------------------------------
//  'INTERNAL' IMPORT
// -----------------------------------------------------------------------------
import { axiosInstance } from '../../axios';
import { API_KEY, BASE_URL } from '../../../../shared/constants';
import { Movie } from '../../../../shared/types/movies/common/movie.types';
import { SearchedMovie } from '../../../../shared/types/movies/searched-movie.types';

// -----------------------------------------------------------------------------
//  TYPES
// -----------------------------------------------------------------------------
export type RequestSearchMovieParams = Pick<Movie, 'title'> & {
  page: number;
};

export interface RequestSearchMovieResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: SearchedMovie[];
}

export const requestSearchMovie = async ({
  page,
  title,
}: RequestSearchMovieParams): Promise<RequestSearchMovieResponse> => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${title}&page=${page}`;
  const { data } = await axiosInstance.get<RequestSearchMovieResponse>(url);
  return data;
};
