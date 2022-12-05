// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Movie } from './common/movie.types';

export type DetailedMovie = Omit<Movie, 'genre_ids' | 'overview'> & {
  status: string;
  budget: number;
  revenue: number;
  tagline: string;
  homepage: string;
  runtime: null | number;
  imdb_id: null | string;
  overview: null | string;
  genres: DetailedMovieGenre[];
  spoken_languages: DetailedMovieSpokenLanguages[];
  production_companies: DetailedMovieProductionCompany[];
  production_countries: DetailedMovieProductionCountry[];
};

interface DetailedMovieGenre {
  id: number;
  name: string;
}

interface DetailedMovieProductionCompany {
  id: number;
  name: string;
  origin_country: string;
  logo_path: null | string;
}

interface DetailedMovieProductionCountry {
  name: string;
  iso_3166_1: string;
}

interface DetailedMovieSpokenLanguages {
  name: string;
  iso_639_1: string;
}
