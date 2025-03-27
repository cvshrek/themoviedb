import { http } from "@configs";
import { IRequestMovieList, IResponseCredit } from "./dtos/movie";
import { IBaseListDTO } from "./dtos/base";


class MovieService {
  static getMovieList({ type, page, query, sort_by }: IRequestMovieList): Promise<IBaseListDTO<Movie>> {
    return http.get(`/movie/${type}`, { params: { page, query, sort_by } });
  }
  static getMovieDetail(id: number): Promise<Movie> {
    return http.get(`/movie/${id}`);
  }
  static getMovieCredits(id: number): Promise<IResponseCredit> {
    return http.get(`/movie/${id}/credits`)
  }
}

export default MovieService;
