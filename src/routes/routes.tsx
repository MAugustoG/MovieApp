// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Home } from '../pages/Home';
import { Movie } from '../pages/Movie';
import { Search } from '../pages/Search';
import { RouterItem } from '../shared/types/routes/router-item.types';

export const routes: RouterItem[] = [
  {
    path: '',
    title: 'Home',
    element: <Home />,
  },
  {
    title: 'Movie',
    path: 'movie/:id',
    element: <Movie />,
  },
  {
    path: 'search',
    title: 'Search',
    element: <Search />,
  },
];
