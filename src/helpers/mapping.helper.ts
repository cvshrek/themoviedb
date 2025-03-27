class MappingHelper {
  static mapLabelAsKey(key: string): Record<string, string> | string {
    return {
      'adult': 'Adult',
      'backdrop_path': 'Backdrop Path',
      'genre_ids': 'Genre Ids',
      'id': 'Id',
      'original_language': 'Original Language',
      'original_title': 'Original Title',
      'overview': 'Overview',
      'popularity': 'Popularity',
      'poster_path': 'Poster Path',
      'release_date': 'Release Date',
      'title': 'Title',
      'video': 'Video',
      'vote_average': 'Vote Average',
      'vote_count': 'Vote Count',
      'top_rated': 'Top Rated',
      'popular': 'Popular',
      'upcoming': 'Upcoming',
      'now_playing': 'Now Playing',
    }[key] ?? key;
  }
}

export default MappingHelper;
