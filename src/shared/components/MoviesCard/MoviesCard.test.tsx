// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { it, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { MoviesCard } from './index';
import { handleGenerateMockedMovie } from '../../utils/tests/handleGenerateMovie';

describe('MoviesCard Component', () => {
  it('it should be possible to render correctly', () => {
    const movie = handleGenerateMockedMovie();
    const { title } = movie;

    render(
      <MemoryRouter>
        <MoviesCard movie={movie} />
      </MemoryRouter>
    );

    expect(screen.getByAltText(title)).toBeInTheDocument();
  });
});
