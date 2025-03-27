// ○ https://developer.themoviedb.org/reference/movie-now-playing-list
// ○ https://developer.themoviedb.org/reference/movie-popular-list
// ○ https://developer.themoviedb.org/reference/movie-upcoming-list
// ○ https://developer.themoviedb.org/reference/movie-details
// ○ https://developer.themoviedb.org/reference/movie-credits
// ○ https://developer.themoviedb.org/reference/account-details
// ○ [Optional] https://developer.themoviedb.org/reference/movie-
// recommendations

import { http } from "@configs";
import { IRequestMovieList } from "./dtos/movie";
import { IBaseListDTO } from "./dtos/base";


class MovieService {
  static getMovieList({ type, page, search, sort_by }: IRequestMovieList): Promise<IBaseListDTO<Movie>> {
    return http.get(`/movie/${type}`, { params: { page, search, sort_by } });
  }
  static getMovieDetail(id: string) {
    return http.get(`/movie/${id}`);
  }
}

export default MovieService;
