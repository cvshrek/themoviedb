import { HomeNavigationParamList } from "@navigators/bottom-tabs.navigator";
import { RouteProp, useRoute } from "@react-navigation/native";
import MovieService from "@services/movie.service";
import { useState } from "react";

function useMovieScreen() {
  const [movie, setMovie] = useState<Movie>()
  const [credits, setCredits] = useState<Cast[]>([])

  const {id} =
    useRoute<RouteProp<HomeNavigationParamList, "MovieDetailsScreen">>()
      .params; 

  const fetchMovie = async () => {
    const response = await MovieService.getMovieDetail(id);
    setMovie(response);
  }

  const fetchCredits = async () => {
    const response = await MovieService.getMovieCredits(id);
    console.log(response);
    setCredits(response.cast);
  }

  const onWatchListAdd = () => {}

  return {
    movie,
    credits,
    fetchMovie,
    fetchCredits,
    onWatchListAdd
  }
}

export default useMovieScreen;