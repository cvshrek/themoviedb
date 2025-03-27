import { AppLogo, Button, Card, Container, Spacer, Text } from '@components';
import { Colors, Dimens, FontSizes } from '@constants';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './movie-details.style';
import FastImage from '@d11/react-native-fast-image';
import useMovieScreen from './movie-details.hook';
import { PathHelper } from '@helpers';
import { displayDurationFromMinute } from '@utils/display.util';
import { formatDateTime } from '@utils/datetime.util';
import Icon from '@react-native-vector-icons/material-design-icons';
import MappingHelper from '@helpers/mapping.helper';
import { FlatList, ScrollView } from 'react-native';

function MovieDetailsScreen(): React.ReactElement {
  const {movie, credits, fetchMovie, fetchCredits} = useMovieScreen();

  useEffect(() => {
    fetchMovie()
    fetchCredits()
  }, []);

  return (
    <Container flex={1} backgroundColor={Colors.white}>
       <SafeAreaView edges={['top']} />
       <AppLogo />
      <ScrollView>
     
      <Container backgroundColor={Colors.secondary_500} padding={Dimens.dimen_24}>
        <Container flexDirection='row' gap={Dimens.dimen_16}>
          <FastImage style={styles.posterImage} source={{ uri: PathHelper.getImgPath(movie?.backdrop_path ?? '')}} />
          <Container gap={Dimens.dimen_8}>
            <Container justifyContent='center' alignItems='center' style={styles.ratingContainer}>
              <Text fontSize={FontSizes.font_12} color={Colors.white}>PG13</Text>
            </Container>
            <Container flexDirection='row' alignItems='center'>
              <Text fontSize={FontSizes.font_14} color={Colors.white}>{formatDateTime(movie?.release_date, 'DD/MM/YYYY')}</Text>
              <Icon name="circle-small" color={Colors.white} size={FontSizes.font_24} />
              <Text fontSize={FontSizes.font_14} color={Colors.white}>{displayDurationFromMinute(movie?.runtime)}</Text>
            </Container>
            <Text fontSize={FontSizes.font_14} color={Colors.white}>{movie?.genres.map(item => item.name).join(', ')}</Text>
            <Text isBold fontSize={FontSizes.font_14} color={Colors.white}>
              Status: 
              <Text fontSize={FontSizes.font_14} color={Colors.white}>{ ` ${movie?.status}`}
              </Text>
            </Text>
            <Text isBold fontSize={FontSizes.font_14} color={Colors.white}>Original Language: 
              <Text fontSize={FontSizes.font_14} color={Colors.white}>
                {` ${MappingHelper.mapLabelAsKey(movie?.original_language ?? '')}`}
              </Text>
            </Text>
          </Container>
        </Container>
      </Container>
      <Container backgroundColor={Colors.secondary} padding={Dimens.dimen_24} gap={Dimens.dimen_24}>
        <Container flexDirection='row'>
          <Container flex={1}>
            <Container style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: Colors.darkGrey }}></Container>
            <Text color={Colors.white} isBold>User Score</Text>
          </Container>
          <Container flex={1} gap={Dimens.dimen_12}>
            <Container>
              <Text color={Colors.white} isBold fontSize={FontSizes.font_14}>Greta Gerwig</Text>
              <Text color={Colors.white} fontSize={FontSizes.font_14}>Director, Writer</Text>
            </Container>
            <Container>
              <Text color={Colors.white} isBold fontSize={FontSizes.font_14}>Noah Baumbach</Text>
              <Text color={Colors.white} fontSize={FontSizes.font_14}>Writer</Text>
            </Container>
          </Container>
        </Container>
        <Container>
          <Text color={Colors.white} fontSize={FontSizes.font_18} fontStyle='italic'>{movie?.tagline}</Text>
        </Container>
        <Container gap={Dimens.dimen_12}>
          <Text color={Colors.white} isBold fontSize={FontSizes.font_24}>Overview</Text>
          <Text color={Colors.white} fontSize={FontSizes.font_14}>{movie?.overview}</Text>
        </Container>
        <Container style={{ width: '50%'}}>
          <Button
            defaultRadius
            size='sm'
            type='outline'
            color={Colors.white}
            title='Add To Watchlist'
            leftContent={<Icon name='bookmark' size={FontSizes.font_18} color={Colors.white} />}
          />
        </Container>
      </Container>
      <Container padding={Dimens.dimen_24} gap={Dimens.dimen_24}>
        <Text fontSize={Dimens.dimen_24}>Top Billed Cast</Text>
        <FlatList
          horizontal
          data={credits}
          renderItem={({ item }) => (
            <Card>
              <FastImage source={{ uri: PathHelper.getImgPath(item.profile_path)}} style={styles.castImage} />
              <Container padding={Dimens.dimen_12}>
                <Text isBold>{item.name}</Text>
                <Text fontSize={FontSizes.font_14}>{item.character}</Text>
              </Container>
            </Card>
          )}
          ItemSeparatorComponent={() => <Spacer space={Dimens.dimen_16} axis='horizontal' />}
          initialNumToRender={5}
        />
      </Container>
      </ScrollView>
    </Container>
  );
}

export default MovieDetailsScreen;
