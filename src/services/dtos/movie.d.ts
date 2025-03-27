export type MovieType = 'popular' | 'now_playing' | 'upcoming';
export type MovieSortBy = 'popularity.desc' | 'popularity.asc' | 'release_date.desc' | 'release_date.asc' | 'vote_average.desc' | 'vote_average.asc';
export interface IRequestMovieList {
  page: number;
  type: MovieType;
  search?: string;
  sort_by?: MovieSortBy;
}

export interface IResponseMovieList{
  'adult': boolean,
  'backdrop_path': string,
  'genre_ids': number[],
  'id': number,
  'original_language': 'en',
  'original_title': string,
  'overview': string,
  'popularity': number,
  'poster_path': string,
  'release_date': string,
  'title': string,
  'video': boolean,
  'vote_average': number,
  'vote_count': number
}