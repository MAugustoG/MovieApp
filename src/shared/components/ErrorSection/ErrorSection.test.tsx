// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { ErrorSection } from './index';

describe('EmptySection Component', () => {
  it('it should be possible to render correctly', () => {
    render(<ErrorSection />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
