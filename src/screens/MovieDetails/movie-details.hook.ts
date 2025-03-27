import { HomeNavigationParamList } from "@navigators/bottom-tabs.navigator";
import { RouteProp, useRoute } from "@react-navigation/native";
import MovieService from "@services/movie.service";
import { useState } from "react";

function useMovieScreen() {
  const [movie, setMovie] = useState<Movie>()

  const {id} =
    useRoute<RouteProp<HomeNavigationParamList, "MovieDetailsScreen">>()
      .params; 

  const fetchMovie = async () => {
    const response = await MovieService.getMovieDetail(id);
    setMovie(response);
  }

  const onWatchListAdd = () => {}

  return {
    movie,
    fetchMovie,
    onWatchListAdd
  }
}

export default useMovieScreen;