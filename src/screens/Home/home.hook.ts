import { Keys } from '@constants';
import { MovieCategory } from '@enums';
import { HomeNavigationProp } from '@navigators/bottom-tabs.navigator';
import { useNavigation } from '@react-navigation/native';
import { IRequestMovieList } from '@services/dtos/movie';
import MovieService from '@services/movie.service';
import StorageUtils from '@utils/stores.util';
import { useRef, useState } from 'react';

function useHomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [activeSearchBtn, setActiveSearchBtn] = useState<boolean>(false);

  const requestRef = useRef<IRequestMovieList>({
    page: 1,
    type: StorageUtils.getItem(Keys.selected_movie_cat) as MovieCategory,
    query: '',
    sort_by: 'popularity.desc'
  });
  const canLoadMore = useRef<boolean>(true);

  const navigation = useNavigation<HomeNavigationProp>();

  const resetData = () => {
    requestRef.current.page = 1;
    setMovies([]);
  }

  const fetchMovies = async (shouldRefresh?: boolean) => {
    if (shouldRefresh) {
      resetData()
    }
    setIsFetching(true);
    const response = await MovieService.getMovieList(requestRef.current);
    canLoadMore.current = response.page < response.total_pages;
    setMovies([...movies, ...response.results]);
    setIsFetching(false);
  };

  const onLoadMore = () => {
    if (isFetching || !canLoadMore.current) {
      return;
    }
    canLoadMore.current = false;
    requestRef.current.page += 1;
    fetchMovies();
  };

  const onSearchSubmit = () => {
    fetchMovies(true);
    setActiveSearchBtn(false);
  };

  const onSearchChange = (key: keyof IRequestMovieList) => (value: string | number) => {
    requestRef.current[key] = value as never;
    if (key === 'type') {
      StorageUtils.setItem(Keys.selected_movie_cat, value.toString())
    }
    setActiveSearchBtn(true);
  };

  const onItemPress = (id: number) => () => {
    navigation.push("MovieDetailsScreen", { id });
  }

  return {
    movies,
    isFetching,
    activeSearchBtn,
    onLoadMore,
    onSearchSubmit,
    onSearchChange,
    fetchMovies,
    onItemPress,
  };
}

export default useHomeScreen;
