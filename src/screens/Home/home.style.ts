import { Dimens } from '@constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: Dimens.dimen_72,
    height: Dimens.dimen_72,
    resizeMode: 'cover',
  },
  posterImage: {
    width: 95,
    height: 140,
    resizeMode: 'cover',
    borderTopLeftRadius: Dimens.dimen_4,
    borderBottomLeftRadius: Dimens.dimen_4,
  },
  container: {
    paddingHorizontal: Dimens.dimen_32,
  },
  listContainer: {
    marginVertical: Dimens.dimen_16
  }
});

export default styles;
