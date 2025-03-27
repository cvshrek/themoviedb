import { AppLogo, Button, Card, CollapsePicker, Container, Spacer, Text, TextField } from '@components';
import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import { Colors, Dimens, FontSizes, Keys } from '@constants';
import useHomeScreen from './home.hook';
import { PathHelper } from '@helpers';
import FastImage from '@d11/react-native-fast-image';
import { MovieCategory } from '@enums';
import { MovieSortBy } from '@services/dtos/movie';
import StorageUtils from '@utils/stores.util';

const movieCategories: {label: string, value: MovieCategory}[] = [
  {label: 'Popular', value: MovieCategory.Popular},
  {label: 'Now Playing', value: MovieCategory.NowPlaying},
  {label: 'Upcoming', value: MovieCategory.Upcoming},
];

const movieSortByOptions:{label: string, value: MovieSortBy}[] = [
  {
    label: 'Alphabet', value: 'popularity.asc',
  },
  {
    label: 'Rating', value:'vote_average.asc',
  },
  {
    label: 'Release date', value: 'release_date.asc'
  }
];

function HomeScreen(): React.ReactElement {
  const {movies, activeSearchBtn, onLoadMore, fetchMovies, onSearchChange, onSearchSubmit, onItemPress} = useHomeScreen();

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderItem: ListRenderItem<Movie> = useCallback(({item}) => (
    <Card onPress={onItemPress(item.id)}>
      <Container flexDirection='row'>
        <FastImage source={{uri: PathHelper.getImgPath(item.backdrop_path)}} style={styles.posterImage} />
        <Container padding={Dimens.dimen_16} gap={Dimens.dimen_16}>
          <Container>
            <Text isBold fontSize={FontSizes.font_14}>{item.title}</Text>
            <Text color={Colors.grey} fontSize={FontSizes.font_14}>{item.release_date}</Text>
          </Container>
          <Text numberOfLines={2} fontSize={FontSizes.font_14}>{item.overview}</Text>
        </Container>
      </Container>
    </Card>
  ), []);

  const renderSeparator = useCallback(() => <Spacer space={Dimens.dimen_16} />, []);
  return (
    <Container flex={1} backgroundColor={Colors.white} gap={Dimens.dimen_8}>
      <SafeAreaView edges={['top']} />
      <AppLogo />
      <Container flex={1} gap={Dimens.dimen_32}>
        <Container gap={Dimens.dimen_16} style={styles.container} >
          <CollapsePicker options={movieCategories} defaultValue={StorageUtils.getItem(Keys.selected_movie_cat) ?? undefined} onValueChange={onSearchChange('type')} />
          <CollapsePicker options={movieSortByOptions} onValueChange={onSearchChange('sort_by')} />
          <TextField placeholder="Search..." onChangeText={onSearchChange('query')}/>
          <Button title='Search' disabled={!activeSearchBtn} onPress={onSearchSubmit} />
        </Container>
        <Container flex={1}>
          <FlatList
            data={movies}
            renderItem={renderItem}
            initialNumToRender={10}
            keyExtractor={(item, index) =>`${item.id.toString()}${index}`}
            ItemSeparatorComponent={renderSeparator}
            contentContainerStyle={[styles.container, styles.listContainer]}
            ListFooterComponent={(
              <Container style={styles.listContainer} backgroundColor='transparent'>
                <Button defaultRadius title='Load More' onPress={onLoadMore} />
              </Container>
            )}
          />
        </Container>
      </Container>
     
    </Container>
  );
}

export default HomeScreen;
