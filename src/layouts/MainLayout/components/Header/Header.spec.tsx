// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { faker } from '@faker-js/faker';
import { it, vi, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Header } from './index';

// -----------------------------------------------------------------------------
// VARIABLES
// -----------------------------------------------------------------------------
const mockedUsedNavigate = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...((await vi.importActual('react-router-dom')) as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Header Component', () => {
  it('it should be possible to render correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByLabelText('search')).toBeInTheDocument();
  });

  it('it should be possible to execute function on search', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const input = screen.getByLabelText('search');
    fireEvent.change(input, { target: { value: faker.datatype.string() } });
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });
});
