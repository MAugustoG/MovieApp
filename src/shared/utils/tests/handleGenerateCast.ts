// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { faker } from '@faker-js/faker';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { MovieCreditsCast } from '../../types/movies/movie-credits.types';

export const handleGenerateMockedCast = (): MovieCreditsCast => {
  return {
    id: faker.datatype.number(),
    name: faker.datatype.string(),
    order: faker.datatype.number(),
    gender: faker.datatype.number(),
    adult: faker.datatype.boolean(),
    cast_id: faker.datatype.number(),
    credit_id: faker.datatype.string(),
    character: faker.datatype.string(),
    popularity: faker.datatype.string(),
    profile_path: faker.datatype.string(),
    original_name: faker.datatype.string(),
    known_for_department: faker.datatype.string(),
  };
};
