import { AppLogo, Card, Container, Header, Spacer, Text } from '@components';
import React, { useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useWatchlistScreen from './watchlist.hook';
import { Colors, Dimens, FontSizes } from '@constants';
import { FlatList, Image, Pressable } from 'react-native';
import { PathHelper } from '@helpers';
import styles from './watchlist.style';
import Icon from '@react-native-vector-icons/material-design-icons';
import FastImage from '@d11/react-native-fast-image';
import { formatDateTime } from '@utils/datetime.util';

function WatchList(): React.ReactElement {
  const {
    account,
    watchlist,
    fetchAccount,
    fetchWatchlist,
    onWatchListRemove
  } = useWatchlistScreen();

  useEffect(() => {
    fetchAccount();
    fetchWatchlist();
  }, [])

  const renderSeparator = useCallback(() => <Spacer space={Dimens.dimen_16} />, []);


  return (
    <Container flex={1}>
      <SafeAreaView edges={['top']} />
      <AppLogo />
      <Header backgroundColor={Colors.primary} />
      <Container flexDirection='row' alignItems='center' padding={Dimens.dimen_24} backgroundColor={Colors.primary} gap={Dimens.dimen_24}>
        {
          account?.avatar.tmdb.avatar_path ? (
            <Image source={{ uri: PathHelper.getImgPath(account?.avatar.tmdb.avatar_path) }} style={styles.avatarContainer} />
          ) : <Container style={styles.avatarContainer} justifyContent='center' alignItems='center'>
            <Text color={Colors.white} fontSize={FontSizes.font_32}>{account?.username.charAt(0)}</Text>
          </Container>
        }
        <Container gap={Dimens.dimen_8}>
          <Text isBold color={Colors.white}>{account?.username}</Text>
          <Text fontSize={FontSizes.font_14} color={Colors.white}>Member since August 2023</Text>
        </Container>
      </Container>
      <Container padding={Dimens.dimen_24} gap={Dimens.dimen_16}>
        <Text isBold>My Watchlist</Text>
        <Container flexDirection='row' alignItems='center' gap={Dimens.dimen_16}>
          <Container flexDirection='row' alignItems='center' gap={Dimens.dimen_8}>
            <Text fontSize={FontSizes.font_14} color={Colors.grey}>
              Filter by:
            </Text>
            <Text fontSize={FontSizes.font_14}>Rating</Text>
          </Container>
          <Container flexDirection='row' alignItems='center' gap={Dimens.dimen_8}>
            <Text fontSize={FontSizes.font_14} color={Colors.grey}>
              Order:
            </Text>
            <Icon name="arrow-up-thin" size={24} />
          </Container>
        </Container>
      </Container>
      <Container>
        <FlatList
          data={watchlist}
          onRefresh={fetchWatchlist}
          refreshing={false}
          ItemSeparatorComponent={renderSeparator}
          renderItem={({item}) => (
            <Card>
              
              <Container flexDirection='row'>
                <FastImage source={{uri: PathHelper.getImgPath(item.backdrop_path)}} style={styles.posterImage} />
                <Container padding={Dimens.dimen_16} gap={Dimens.dimen_16}>
                  <Container>
                    <Text isBold>{item.title}</Text>
                    <Text color={Colors.grey} fontSize={FontSizes.font_14}>{formatDateTime(item.release_date, 'DD/MM/YYYY')}</Text>
                  </Container>
                  <Text numberOfLines={2} fontSize={FontSizes.font_14}>{item.overview}</Text>
                </Container>
              </Container>
              <Pressable onPress={() => onWatchListRemove(item.id)} style={{ position: 'absolute', top: 5, right: 5, zIndex: 1}}>
                <Icon name='close' size={Dimens.dimen_20} />
              </Pressable>
          </Card>
          )}
          contentContainerStyle={{
            paddingHorizontal: Dimens.dimen_24
          }}
        />
      </Container>
    </Container>
  );
}

export default WatchList;
