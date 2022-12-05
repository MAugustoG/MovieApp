// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { it, describe } from 'vitest';
import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { ImageComponent } from './index';

describe('ImageComponent Component', () => {
  it('it should be possible to render correctly', () => {
    const value = faker.datatype.string();
    render(<ImageComponent alt={value} path={value} />);
    expect(screen.getByAltText(value)).toBeInTheDocument();
  });

  it('it should be possible to render correctly when path is null', () => {
    const value = faker.datatype.string();
    render(<ImageComponent alt={value} path={null} />);
    expect(screen.getByLabelText('not-found-image')).toBeInTheDocument();
  });
});
