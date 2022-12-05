export interface Movie {
  id: number;
  title: string;
  video: boolean;
  adult: boolean;
  overview: string;
  popularity: number;
  vote_count: number;
  genre_ids: number[];
  vote_average: number;
  release_date: string;
  original_title: string;
  original_language: string;
  poster_path: null | string;
  backdrop_path: null | string;
}
