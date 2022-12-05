// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { ErrorSection } from '../../shared/sections/ErrorSection';
import { EmptySection } from '../../shared/sections/EmptySection';
import { Movie } from '../../shared/types/movies/common/movie.types';
import { useSearchMovie } from '../../services/hooks/useSearchMovie';
import { InfiniteMovieList } from '../../shared/components/InfiniteMovieList';

export const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    if (!query) {
      navigate(`/`);
    }
  }, [query]);

  const {
    data,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchMovie({ title: `${query}` });

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

  if (!movies.length && !isFetching)
    return <EmptySection label={`Nothing searched for: ${query}`} />;

  return (
    <InfiniteMovieList
      data={movies}
      isFetching={isFetching}
      hasNextPage={hasNextPage}
      fetchNextPage={handleLoadNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};
