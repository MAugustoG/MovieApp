// -----------------------------------------------------------------------------
//  'INTERNAL' IMPORT
// -----------------------------------------------------------------------------
import { axiosInstance } from '../../config/libs/axios';
import { API_KEY, BASE_URL } from '../../shared/constants';
import { TopRatedMovie } from '../../shared/types/movies/top-rated-movie.types';

// -----------------------------------------------------------------------------
//  TYPES
// -----------------------------------------------------------------------------
interface RequestTopRatedMoviesParams {
  page: number;
}

export interface RequestTopRatedMoviesResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: TopRatedMovie[];
}

export const requestTopRatedMovies = async ({
  page,
}: RequestTopRatedMoviesParams): Promise<RequestTopRatedMoviesResponse> => {
  const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`;
  const { data } = await axiosInstance.get<RequestTopRatedMoviesResponse>(url);
  return data;
};
