import { Colors, Dimens, Fonts, FontSizes } from "@constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Dimens.dimen_4,
  },
  input: {
    padding: Dimens.dimen_12,
    fontSize: FontSizes.font_16,
    fontFamily: Fonts.PRIMARY_BOLD
  }
});
export default styles;
