import { Colors, Dimens } from "@constants";
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
  list: {
    gap: Dimens.dimen_8,
    padding: Dimens.dimen_24,
  },
  item: {
    padding: Dimens.dimen_8,
    backgroundColor: Colors.lightGrey,
    borderRadius: Dimens.dimen_4,
  }
});
export default styles;
