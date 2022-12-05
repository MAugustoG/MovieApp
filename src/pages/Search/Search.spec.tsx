// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { it, vi, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { UseInfiniteQueryResult } from 'react-query';
import { render, screen } from '@testing-library/react';

// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Search } from './index';
import { RequestSearchMovieResponse } from '../../services/api/requestSearchMovie';
import { handleGenerateMockedMovie } from '../../shared/utils/tests/handleGenerateMovie';

// -----------------------------------------------------------------------------
// TYPES AND VARIABLES
// -----------------------------------------------------------------------------
type TestsReturnValue = Partial<
  UseInfiniteQueryResult<RequestSearchMovieResponse>
>;

let returnValue: null | TestsReturnValue = null;

const movieOne = handleGenerateMockedMovie();
const movieTwo = handleGenerateMockedMovie();
const movieThree = handleGenerateMockedMovie();

const moviesResult = [movieOne, movieTwo, movieThree];

const correctHookResponseData: TestsReturnValue = {
  error: false,
  isLoading: false,
  isFetching: false,
  hasNextPage: false,
  fetchNextPage: vi.fn(),
  isFetchingNextPage: false,
  data: {
    pageParams: [2],
    pages: [
      {
        page: 1,
        total_pages: 1,
        results: moviesResult,
        total_results: moviesResult.length,
      },
    ],
  },
};

const errorHookResponseData: TestsReturnValue = {
  error: true,
  isLoading: false,
  data: undefined,
  isFetching: false,
  hasNextPage: false,
  fetchNextPage: vi.fn(),
  isFetchingNextPage: false,
};

const fetchingNextPageHookResponseData: TestsReturnValue = {
  error: false,
  isLoading: false,
  isFetching: true,
  hasNextPage: true,
  fetchNextPage: vi.fn(),
  isFetchingNextPage: true,
  data: {
    pageParams: [2],
    pages: [
      {
        page: 1,
        total_pages: 1,
        results: moviesResult,
        total_results: moviesResult.length,
      },
    ],
  },
};

const emptyHookResponseData: TestsReturnValue = {
  error: false,
  isLoading: false,
  isFetching: false,
  hasNextPage: false,
  fetchNextPage: vi.fn(),
  isFetchingNextPage: false,
  data: {
    pages: [],
    pageParams: [2],
  },
};

vi.mock('../../services/hooks/useSearchMovie', () => ({
  useSearchMovie: () => returnValue,
}));

describe('Search Component', () => {
  beforeEach(() => {
    returnValue = null;

    const mockIntersectionObserver = vi.fn();

    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      disconnect: () => null,
    });

    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('it should be possible to render correctly', () => {
    returnValue = correctHookResponseData;

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const { title: titleMovieOne } = movieOne;
    const { title: titleMovieTwo } = movieTwo;
    const { title: titleMovieThree } = movieThree;

    expect(screen.getByAltText(titleMovieOne)).toBeInTheDocument();
    expect(screen.getByAltText(titleMovieTwo)).toBeInTheDocument();
    expect(screen.getByAltText(titleMovieThree)).toBeInTheDocument();
  });

  it('it should not be possible to render correctly (Error)', () => {
    returnValue = errorHookResponseData;

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('it should not be possible to render correctly (Fetching next Page)', () => {
    returnValue = fetchingNextPageHookResponseData;

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const { title: titleMovieOne } = movieOne;
    const { title: titleMovieTwo } = movieTwo;
    const { title: titleMovieThree } = movieThree;

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByAltText(titleMovieOne)).toBeInTheDocument();
    expect(screen.getByAltText(titleMovieTwo)).toBeInTheDocument();
    expect(screen.getByAltText(titleMovieThree)).toBeInTheDocument();
  });

  it('it should not be possible to render correctly (Empty Search)', () => {
    returnValue = emptyHookResponseData;

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Nothing searched', { exact: false })
    ).toBeInTheDocument();
  });
});
