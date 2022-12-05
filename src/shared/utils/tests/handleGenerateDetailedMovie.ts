// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { faker } from '@faker-js/faker';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { DetailedMovie } from '../../types/movies/detailed-movie.types';

export const handleGenerateMockedCast = (): DetailedMovie => {
  return {
    id: faker.datatype.number(),
    title: faker.datatype.string(),
    video: faker.datatype.boolean(),
    adult: faker.datatype.boolean(),
    status: faker.datatype.string(),
    budget: faker.datatype.number(),
    revenue: faker.datatype.number(),
    tagline: faker.datatype.string(),
    runtime: faker.datatype.number(),
    imdb_id: faker.datatype.string(),
    homepage: faker.datatype.string(),
    overview: faker.datatype.string(),
    popularity: faker.datatype.number(),
    vote_count: faker.datatype.number(),
    poster_path: faker.datatype.string(),
    vote_average: faker.datatype.number(),
    release_date: faker.datatype.string(),
    backdrop_path: faker.datatype.string(),
    original_title: faker.datatype.string(),
    original_language: faker.datatype.string(),
    genres: [
      {
        id: faker.datatype.number(),
        name: faker.datatype.string(),
      },
      {
        id: faker.datatype.number(),
        name: faker.datatype.string(),
      },
    ],
    spoken_languages: [],
    production_companies: [],
    production_countries: [],
  };
};
