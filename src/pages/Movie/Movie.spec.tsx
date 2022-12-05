import { Movie } from './index';
import { it, vi, describe } from 'vitest';
import { UseQueryResult } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { DetailedMovie } from '../../shared/types/movies/detailed-movie.types';

type TestsReturnValue = Partial<UseQueryResult<DetailedMovie>>;

let returnValue: null | TestsReturnValue = null;

const loadingHookResponseData: TestsReturnValue = {
  isLoading: true,
  data: undefined,
};

const errorHookResponseData: TestsReturnValue = {
  error: true,
  data: undefined,
  isLoading: false,
};

vi.mock('../../services/hooks/useMovieDetails', () => ({
  useMovieDetails: () => returnValue,
}));

describe('Movie Component', () => {
  beforeEach(() => {
    returnValue = null;

    const mockIntersectionObserver = vi.fn();

    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      disconnect: () => null,
    });

    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('it should not be possible to render correctly (Loading)', () => {
    returnValue = loadingHookResponseData;

    render(
      <MemoryRouter>
        <Movie />
      </MemoryRouter>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('it should not be possible to render correctly (Error)', () => {
    returnValue = errorHookResponseData;

    render(
      <MemoryRouter>
        <Movie />
      </MemoryRouter>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
