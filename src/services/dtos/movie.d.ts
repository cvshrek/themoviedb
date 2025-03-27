export type MovieType = 'popular' | 'now_playing' | 'upcoming';
export type MovieSortBy = 'popularity.desc' | 'popularity.asc' | 'release_date.desc' | 'release_date.asc' | 'vote_average.desc' | 'vote_average.asc';
 interface IRequestMovieList {
  page: number;
  type: MovieType;
  query?: string;
  sort_by?: MovieSortBy;
}

interface IResponseCredit {
  id: number,
  cast: Cast[]
}
