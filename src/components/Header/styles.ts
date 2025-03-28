import { Dimens } from "@constants";
import { verticalScale } from "@utils/mixins.util";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: verticalScale(40),
    paddingHorizontal: Dimens.dimen_8
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    left: Dimens.dimen_4,
  }
});

export default styles;