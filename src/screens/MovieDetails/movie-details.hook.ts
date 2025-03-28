import { Keys } from "@constants";
import { HomeNavigationParamList } from "@navigators/bottom-tabs.navigator";
import { RouteProp, useRoute } from "@react-navigation/native";
import MovieService from "@services/movie.service";
import StorageUtils from "@utils/stores.util";
import { useState } from "react";

function useMovieScreen() {
  const [movie, setMovie] = useState<Movie>()
  const [credits, setCredits] = useState<Cast[]>([])
  const [recommendations, setRecommendations] = useState<Movie[]>([])
  const [isWatchlist, setIsWatchlist] = useState<boolean>(false);

  const {id} =
    useRoute<RouteProp<HomeNavigationParamList, "MovieDetailsScreen">>()
      .params; 

  const fetchMovie = async () => {
    const response = await MovieService.getMovieDetail(id);
    setMovie(response);
    setIsWatchlist(checkWatchListExisted());
  }

  const fetchCredits = async () => {
    const response = await MovieService.getMovieCredits(id);
    setCredits(response.cast);
  }

  const fetchRecommendations = async () => {
    const response = await MovieService.getMovieRecommendations(id);
    setRecommendations(response.results);
  }

  const checkWatchListExisted = (): boolean => {
    const watchlistCollection = StorageUtils.getItem(Keys.watchlist_collection)
    if (watchlistCollection && movie) {
      const parsedCollection = JSON.parse(watchlistCollection);
      return !!parsedCollection[movie?.id]
    }
    return false;
  }

  const onWatchListPress = () => {
    if (checkWatchListExisted()) {
      onWatchListRemove()
    } else {
      const watchlistCollection = StorageUtils.getItem(Keys.watchlist_collection)
      const watchlists = StorageUtils.getItem(Keys.watchlist_storage)

      if (watchlistCollection && watchlists && movie) {
        const parsedCollection = JSON.parse(watchlistCollection) ?? {};
        const parsedWatchlists = [...JSON.parse(watchlists), movie];
        parsedCollection[movie.id] = true;
        StorageUtils.setItem(Keys.watchlist_collection, JSON.stringify(parsedCollection));
        StorageUtils.setItem(Keys.watchlist_storage, JSON.stringify(parsedWatchlists))
      }
    }
  }

  const onWatchListRemove = () => {
    const watchlistCollection = StorageUtils.getItem(Keys.watchlist_collection)
    const watchlists = StorageUtils.getItem(Keys.watchlist_storage)
    if (watchlistCollection && watchlists && movie) {
      const parsedCollection = JSON.parse(watchlistCollection);
      const parsedWatchlists = JSON.parse(watchlists).filter((item: Movie) => item.id === movie.id);
      parsedCollection[movie.id] = false;
      StorageUtils.setItem(Keys.watchlist_collection, JSON.stringify(parsedCollection));
      StorageUtils.setItem(Keys.watchlist_storage, JSON.stringify(parsedWatchlists))
    }
  }

  return {
    movie,
    credits,
    recommendations,
    isWatchlist,
    fetchMovie,
    fetchCredits,
    fetchRecommendations,
    onWatchListPress
  }
}

export default useMovieScreen;