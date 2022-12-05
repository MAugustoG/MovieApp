// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { faker } from '@faker-js/faker';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Movie } from '../../types/movies/common/movie.types';

export const handleGenerateMockedMovie = (): Movie => {
  return {
    id: faker.datatype.number(),
    title: faker.datatype.string(),
    adult: faker.datatype.boolean(),
    video: faker.datatype.boolean(),
    overview: faker.datatype.string(),
    popularity: faker.datatype.number(),
    vote_count: faker.datatype.number(),
    vote_average: faker.datatype.number(),
    poster_path: faker.datatype.string(),
    release_date: faker.datatype.string(),
    backdrop_path: faker.datatype.string(),
    original_title: faker.datatype.string(),
    original_language: faker.datatype.string(),
    genre_ids: faker.datatype.array(0) as number[],
  };
};
