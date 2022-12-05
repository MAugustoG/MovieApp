// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { faker } from '@faker-js/faker';
import { it, vi, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

// -----------------------------------------------------------------------------
// 'IMPORT' IMPORTS
// -----------------------------------------------------------------------------
import { SearchInput } from './index';

describe('SearchInput Component', () => {
  it('it should be possible to render correctly', () => {
    render(<SearchInput />);
    expect(screen.getByLabelText('search')).toBeInTheDocument();
  });

  it('it should be possible to execute search function', () => {
    const mockOnChange = vi.fn();

    render(<SearchInput onChange={mockOnChange} />);

    const input = screen.getByLabelText('search');
    fireEvent.change(input, { target: { value: faker.datatype.string() } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
