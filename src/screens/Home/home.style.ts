import { Dimens } from '@constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: Dimens.dimen_72,
    height: Dimens.dimen_72,
    resizeMode: 'contain',
  },
  posterImage: {
    width: '25%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: Dimens.dimen_8,
    borderBottomLeftRadius: Dimens.dimen_8,
  },
  container: {
    paddingHorizontal: Dimens.dimen_32,
  },
  listContainer: {
    marginVertical: Dimens.dimen_16
  }
});

export default styles;
