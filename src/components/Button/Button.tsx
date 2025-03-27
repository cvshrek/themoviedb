import { Text } from "@components/Text";
import { Colors, Dimens } from "@constants";
import { TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from './styles';

type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  titleStyle?: TextStyle,
  size?: ButtonSize,
  buttonStyle?: TouchableOpacityProps['style'],
  defaultRadius?: boolean
}

const getButtonHeight = (size?: ButtonSize): number => {
  if (size === 'lg') return Dimens.dimen_56;
  if (size === 'sm') return Dimens.dimen_40;
  return Dimens.dimen_48
}

const createButtonStyle = (props: ButtonProps): TouchableOpacityProps['style'] => ({
  height: getButtonHeight(props.size),
  backgroundColor: props.disabled ? Colors.lightGrey : Colors.secondary,
  borderRadius: props.defaultRadius ? Dimens.dimen_4 : getButtonHeight(props.size)/2
})

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <TouchableOpacity {...props} style={[styles.button, createButtonStyle(props), props.buttonStyle]} >
    <Text isBold color={props.disabled ? Colors.grey : Colors.white}>{props.title}</Text>
  </TouchableOpacity>;
};

export default Button;
