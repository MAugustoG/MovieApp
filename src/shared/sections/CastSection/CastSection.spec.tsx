// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { it, vi, describe } from 'vitest';
import { UseQueryResult } from 'react-query';
import { render, screen } from '@testing-library/react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { CastSection } from './index';
import { handleGenerateMockedCast } from '../../utils/tests/handleGenerateCast';
import { RequestMovieCreditsResponse } from '../../../services/api/requestMovieCredits';

type TestsReturnValue = Partial<UseQueryResult<RequestMovieCreditsResponse>>;

let returnValue: null | TestsReturnValue = null;

const cast = handleGenerateMockedCast();

const correctHookResponseData: TestsReturnValue = {
  isLoading: false,
  data: {
    id: 1,
    crew: [],
    cast: [cast],
  },
};

const loadingHookResponseData: TestsReturnValue = {
  isLoading: true,
  data: undefined,
};

vi.mock('../../../services/hooks/useMovieCredits', () => ({
  useMovieCredits: () => returnValue,
}));

describe('CastSection Component', () => {
  beforeEach(() => {
    returnValue = null;
  });

  it('it should be possible to render correctly', () => {
    returnValue = correctHookResponseData;

    render(<CastSection id={1} />);
    expect(screen.getByAltText(cast.name)).toBeInTheDocument();
  });

  it('it should be possible to render the video (loading)', () => {
    returnValue = loadingHookResponseData;

    render(<CastSection id={1} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
