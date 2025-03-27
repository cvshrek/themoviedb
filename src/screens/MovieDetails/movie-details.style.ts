import { Colors, Dimens } from '@constants';
import { moderateScale } from '@utils/mixins.util';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  posterImage: {
    width: '30%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: Dimens.dimen_4
  },
  ratingContainer: {
    borderRadius: Dimens.dimen_4,
    borderWidth: 0.5,
    borderColor: Colors.white,
    width: 48,
    padding: Dimens.dimen_4,
  },
  castImage: {
    width: 140,
    height: 154,
    resizeMode: 'repeat'
  }
});

export default styles;
