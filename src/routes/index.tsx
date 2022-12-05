// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Route, Routes } from 'react-router-dom';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { routes } from './routes';
import { MainLayout } from '../layouts/MainLayout';
import { RouterItem } from '../shared/types/routes/router-item.types';

export const Router = () => {
  const routers = routes.map(({ path, title, element }: RouterItem) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      <Route element={<MainLayout />}>{routers}</Route>
    </Routes>
  );
};
