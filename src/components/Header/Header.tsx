import { ReactNode } from "react";
import { Pressable, View, ViewStyle } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "@react-native-vector-icons/material-design-icons";
import { Colors, Dimens, FontSizes } from "@constants";
import { Text } from "@components/Text";

interface HeaderProps {
  title?: string,
  leftComponent?: ReactNode,
  rightComponent?: ReactNode,
  centerComponent?: ReactNode,
  onBackPress?: () => void,
  style?: ViewStyle,
  backgroundColor?: string,
}

const Header: React.FC<HeaderProps> = (props) => {
  const navigation = useNavigation()
  return (
  <View style={[styles.container, { backgroundColor: props.backgroundColor}, props.style]}>
    <Pressable
      onPress={navigation.goBack}
      style={styles.backButton}
      hitSlop={{
        top: Dimens.dimen_48,
        right: Dimens.dimen_48,
        left: Dimens.dimen_48,
        bottom: Dimens.dimen_48
      }}
    >
      <Icon name="chevron-left"
          size={32}
          color={Colors.white}
        />
    </Pressable>
    <View style={{ flex: 1}}>
      <Text align="center" color={Colors.white} isBold fontSize={FontSizes.font_18}>{props.title}</Text>
    </View>
    <View>
      {props.rightComponent}
    </View>
  </View>
)};

export default Header