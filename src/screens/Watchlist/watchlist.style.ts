import { Colors, Dimens } from "@constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatarContainer: {
    width: Dimens.dimen_64, height: Dimens.dimen_64, borderRadius: Dimens.dimen_64/2, backgroundColor: Colors.secondary 
  },
  posterImage: {
    width: 95,
    height: 140,
    resizeMode: 'cover',
    borderTopLeftRadius: Dimens.dimen_4,
    borderBottomLeftRadius: Dimens.dimen_4,
  },
})

export default styles;