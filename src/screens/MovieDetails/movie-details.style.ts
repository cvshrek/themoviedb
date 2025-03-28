import { Colors, Dimens } from '@constants';
import { horizontalScale } from '@utils/mixins.util';
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
  castItem: {
    width: horizontalScale(140),
  },
  castImage: {
    width: '100%',
    height: horizontalScale(154),
    resizeMode: 'cover',
    borderTopStartRadius: 4,
    borderTopEndRadius: 4,
  },
  progressContainer: {
    width: horizontalScale(60),
    height: horizontalScale(60),
    borderRadius: horizontalScale(60)/2,
    backgroundColor: Colors.darkGrey
  },
  recommendItem: {
    width: horizontalScale(286),
  },
  recommendImage: {
    width: '100%',
    height: horizontalScale(162),
    resizeMode: 'cover',
    borderRadius: 4,
  },
  listContainer: {
    paddingVertical: Dimens.dimen_16
  }
});

export default styles;
