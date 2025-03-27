import { AppLogo, Container, Text } from '@components';
import { Colors, Dimens } from '@constants';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './movie-details.style';
import FastImage from '@d11/react-native-fast-image';
import useMovieScreen from './movie-details.hook';
import { PathHelper } from '@helpers';

function MovieDetailsScreen(): React.ReactElement {
  const {movie, fetchMovie} = useMovieScreen();
  useEffect(() => {
    fetchMovie()
  }, [])
  return (
    <Container flex={1}>
      <SafeAreaView edges={['top']} />
      <AppLogo />
      <Container backgroundColor={Colors.secondary_500} padding={Dimens.dimen_24}>
        <Container flexDirection='row' gap={Dimens.dimen_16}>
          <FastImage style={styles.posterImage} source={{ uri: PathHelper.getImgPath(movie?.backdrop_path ?? '')}} />
          <Container>
            <Container>
              <Text>PG13</Text>
            </Container>
            <Text>PG13</Text>
          </Container>
        </Container>
      </Container>
      <Container backgroundColor={Colors.secondary} padding={Dimens.dimen_24}>
        <Text>222</Text>
      </Container>
    </Container>
  );
}

export default MovieDetailsScreen;
