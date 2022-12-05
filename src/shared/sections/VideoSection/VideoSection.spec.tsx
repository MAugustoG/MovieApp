// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { faker } from '@faker-js/faker';
import { it, vi, describe } from 'vitest';
import { UseQueryResult } from 'react-query';
import { render, screen } from '@testing-library/react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { VideoSection } from './index';
import { handleGenerateMockedVideo } from '../../utils/tests/handleGenerateVideo';
import { RequestMovieVideosResponse } from '../../../services/api/requestMovieVideos';

type TestsReturnValue = Partial<UseQueryResult<RequestMovieVideosResponse>>;

let returnValue: null | TestsReturnValue = null;

const correctHookResponseData: TestsReturnValue = {
  isLoading: false,
  data: {
    id: 1,
    results: [handleGenerateMockedVideo()],
  },
};

const loadingHookResponseData: TestsReturnValue = {
  isLoading: true,
  data: undefined,
};

const emptyHookResponseData: TestsReturnValue = {
  isLoading: false,
  data: {
    id: 1,
    results: [],
  },
};

vi.mock('../../../services/hooks/useMovieVideos', () => ({
  useMovieVideos: () => returnValue,
}));

describe('VideoSection Component', () => {
  beforeEach(() => {
    returnValue = null;
  });

  it('it should be possible to render correctly', () => {
    const id = faker.datatype.number();
    const title = faker.datatype.string();

    returnValue = correctHookResponseData;

    render(<VideoSection id={id} title={title} />);
    expect(screen.getByTitle(`${title}-video`)).toBeInTheDocument();
  });

  it('it should be possible to render the video (loading)', () => {
    const id = faker.datatype.number();
    const title = faker.datatype.string();

    returnValue = loadingHookResponseData;

    render(<VideoSection id={id} title={title} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('it should be possible to render the video (no data)', async () => {
    const id = faker.datatype.number();
    const title = faker.datatype.string();

    returnValue = emptyHookResponseData;
    const { container } = render(<VideoSection id={id} title={title} />);

    expect(container.childElementCount).toEqual(0);
  });
});
