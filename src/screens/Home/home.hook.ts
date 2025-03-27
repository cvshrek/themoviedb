import { IRequestMovieList } from '@services/dtos/movie';
import MovieService from '@services/movie.service';
import { useRef, useState } from 'react';

function useHomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const requestRef = useRef<IRequestMovieList>({ page: 1, type: 'popular', search: '', sort_by: 'popularity.desc' });
  const canLoadMore = useRef<boolean>(true);

  const fetchMovies = async (shouldRefresh?: boolean) => {
    if (shouldRefresh) {
      requestRef.current.page = 1;
    }
    setIsFetching(true);
    const response = await MovieService.getMovieList(requestRef.current);
    canLoadMore.current = response.page < response.total_pages;
    setMovies([...movies, ...response.results]);
    setIsFetching(false);
  };

  const onEndReached = () => {
    if (isFetching || !canLoadMore.current) {
      return;
    }
    canLoadMore.current = false;
    requestRef.current.page += 1;
    fetchMovies();
  };

  const onSearchSubmit = () => {
    fetchMovies(true);
  };

  const onSearchChange = (key: keyof IRequestMovieList) => (value: string | number) => {
    requestRef.current[key] = value as never;
  };

  return {
    movies,
    isFetching,
    onEndReached,
    onSearchSubmit,
    onSearchChange,
    fetchMovies,
  };
}

export default useHomeScreen;
