// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { CastCard } from './index';
import { handleGenerateMockedCast } from '../../../../utils/tests/handleGenerateCast';

describe('CastCard Component', () => {
  it('it should be possible to render correctly', () => {
    const cast = handleGenerateMockedCast();
    const { name } = cast;
    render(<CastCard cast={cast} />);
    expect(screen.getByAltText(name)).toBeInTheDocument();
  });
});
