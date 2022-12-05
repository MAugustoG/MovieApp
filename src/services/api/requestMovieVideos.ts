// -----------------------------------------------------------------------------
//  'INTERNAL' IMPORT
// -----------------------------------------------------------------------------
import { axiosInstance } from '../../config/libs/axios';
import { API_KEY, BASE_URL } from '../../shared/constants';
import { Movie } from '../../shared/types/movies/common/movie.types';
import { MovieVideo } from '../../shared/types/movies/movie-video.types';

// -----------------------------------------------------------------------------
//  TYPES
// -----------------------------------------------------------------------------
export type RequestMovieVideosParams = Pick<Movie, 'id'>;
export interface RequestMovieVideosResponse {
  id: number;
  results: MovieVideo[];
}

export const requestMovieVideos = async ({
  id,
}: RequestMovieVideosParams): Promise<RequestMovieVideosResponse> => {
  const url = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`;
  const { data } = await axiosInstance.get<RequestMovieVideosResponse>(url);
  return data;
};
