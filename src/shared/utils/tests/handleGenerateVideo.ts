// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { faker } from '@faker-js/faker';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { MovieVideo } from '../../types/movies/movie-video.types';

export const handleGenerateMockedVideo = (): MovieVideo => {
  return {
    id: faker.datatype.string(),
    key: faker.datatype.string(),
    name: faker.datatype.string(),
    size: faker.datatype.number(),
    type: faker.datatype.string(),
    site: faker.datatype.string(),
    official: faker.datatype.boolean(),
    iso_639_1: faker.datatype.string(),
    iso_3166_1: faker.datatype.string(),
    published_at: faker.datatype.string(),
  };
};
