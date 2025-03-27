interface Genre {
  "id": number,
  "name": string
}

interface ProductionCompany {
  "id": number,
  "logo_path": string,
  "name": string,
  "origin_country": string
}

interface SpokenLanguages {
  "english_name": string,
  "iso_639_1": string,
  "name": string
}

interface Movie {
  'adult': boolean,
  'backdrop_path': string,
  'genre_ids': number[],
  'id': number,
  'original_language': string,
  'original_title': string,
  'overview': string,
  'popularity': number,
  'poster_path': string,
  'release_date': string,
  'title': string,
  'video': boolean,
  'vote_average': number,
  'vote_count': number,
  "belongs_to_collection": string | null,
  "budget": number,
  "genres": Genre[],
  "homepage": string,
  "imdb_id":string,
  "origin_country": string[],
  "production_companies": ProductionCompany[],
  "revenue": number,
  "runtime": number,
  "spoken_languages": SpokenLanguages[],
  "status": string,
  "tagline": string,
}