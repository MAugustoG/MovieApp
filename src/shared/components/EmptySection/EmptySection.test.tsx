// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { it, describe } from 'vitest';
import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { EmptySection } from './index';

describe('EmptySection Component', () => {
  it('it should be possible to render correctly', () => {
    const label = faker.datatype.string();
    render(<EmptySection label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
