// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { useMemo } from 'react';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Loader } from '../../shared/components/Loader';
import { ErrorSection } from '../../shared/sections/ErrorSection';
import { EmptySection } from '../../shared/sections/EmptySection';
import { Movie } from '../../shared/types/movies/common/movie.types';
import { useTopRatedMovies } from '../../services/hooks/useTopRatedMovies';
import { InfiniteMovieList } from '../../shared/components/InfiniteMovieList';

export const Home = () => {
  const {
    data,
    error,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useTopRatedMovies();

  const handleLoadNextPage = () => {
    fetchNextPage();
  };

  const movies: Movie[] = useMemo(() => {
    if (!data) return [];

    let auxMovies: Movie[] = [];

    data.pages.forEach(
      ({ results }) => (auxMovies = [...auxMovies, ...results])
    );

    return auxMovies;
  }, [data]);

  if (error) return <ErrorSection />;

  if (isLoading) return <Loader />;

  if (movies.length < 1 && !isFetching)
    return <EmptySection label='There is no movies' />;

  return (
    <InfiniteMovieList
      data={movies}
      hasNextPage={hasNextPage}
      fetchNextPage={handleLoadNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};
