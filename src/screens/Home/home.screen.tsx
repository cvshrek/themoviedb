import { Card, Container, Spacer, Text } from '@components';
import React, { useCallback, useEffect } from 'react';
import { FlatList, Image, ListRenderItem } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import { Dimens } from '@constants';
import useHomeScreen from './home.hook';

function HomeScreen(): React.ReactElement {
  const {movies, onEndReached, fetchMovies} = useHomeScreen();

  useEffect(() => {
    fetchMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem: ListRenderItem<Movie> = useCallback(({item}) => (
   <Card>
      <Container padding={Dimens.dimen_16} flexDirection='row'>
        <Text>{item.title}</Text>

      </Container>
   </Card>
  ), []);

  const renderSeparator = useCallback(() => <Spacer space={Dimens.dimen_16} />, []);
  return (
    <Container flex={1} >
      <SafeAreaView edges={['top']} />
      <Container justifyContent="center" alignItems="center">
        <Image source={require('@assets/images/app_logo.png')} style={styles.image}  />
      </Container>
      <Container flex={1} padding={Dimens.dimen_24} gap={Dimens.dimen_32}>
      <Container gap={Dimens.dimen_16} >

      </Container>
      <Container gap={Dimens.dimen_16}>
        <FlatList data={movies} renderItem={renderItem} keyExtractor={item => item.id.toString()} ItemSeparatorComponent={renderSeparator} onEndReached={onEndReached}  />
      </Container>
      </Container>
    </Container>
  );
}

export default HomeScreen;
